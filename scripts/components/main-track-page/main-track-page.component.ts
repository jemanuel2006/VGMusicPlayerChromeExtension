import { Component, ViewEncapsulation } from '@angular/core';
import { SongsService } from '../../services/songs-service';
import { AlbumInfo } from '../../models/album-model';
import { Track } from '../../models/track-model';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { PlaylistService } from '../../services/playlist-service'

@Component({
    selector: 'tracks-component',
    templateUrl: './scripts/components/main-track-page/main-track-page.component.html',
    styleUrls: ['./scripts/components/main-track-page/main-track-page.component.css'],
    providers: [ SongsService ],
    encapsulation: ViewEncapsulation.None
})

export class MainTrackPageComponent{
    private allAlbums: AlbumInfo[];
    private currentAlbumSelection: AlbumInfo[];
    public errorMessage: any;
    public selectedAlbum: Track[];
    public currentSelectedAlbumSelection: Track[];
    public selectedSong: Track;

    config: MdDialogConfig = {
        disableClose: false,
        width: '50%',
        height: '40%',
        position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
        }
    };

    constructor(private songsService: SongsService, private playlistService: PlaylistService, public dialog: MdDialog){
        this.selectedAlbum = null;
        this.selectedSong = null;
    }

    albumColumns = [
        { prop: 'albumName', name:'Album Name' }
    ];

    trackColumns = [
        { prop: 'songName', name:'Song Name' }
    ];

    ngAfterViewInit(){
        this.songsService.getSongs().subscribe(albums => 
        {
            this.allAlbums = albums;
            this.currentAlbumSelection = albums;
        }, 
        error => this.errorMessage);
    }
    
    onAlbumSelect({ selected }) {
        this.selectedAlbum = selected[0].tracks;
        this.currentSelectedAlbumSelection = selected[0].tracks;
    }

    onSongSelect(rowEvent) {
        if(rowEvent.type == "dblclick"){
            this.selectedSong = rowEvent.row;
        }
    }

    updateAlbumFilter(event) {
        let val = event.target.value;

        // filter our data
        let temp = this.allAlbums.filter(function(d) {
            return d.albumName.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.currentAlbumSelection = temp;
    }

    updateSongFilter(event) {
        let val = event.target.value;

        // filter our data
        let temp = this.selectedAlbum.filter(function(d) {
            return d.songName.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.currentSelectedAlbumSelection = temp;
    }

    openCreatePlaylistDialog(row){
        let dialogRef = this.dialog.open(AddToPlaylistDialog, this.config);
        dialogRef.afterClosed().subscribe(result => {
            this.playlistService.addTrackToPlaylist(result, row);
        });
    }
}

@Component({
  selector: 'add-to-playlist-dialog',
  template: `
    <div layout="column">
    <div class="flex-container" fxLayout="row" fxLayoutAlign="center center" style="padding-top:20px;">
        <div class="flex-item" fxFlex="100%">
            <ngx-datatable
                [rows]="getAllPlaylists()" class="material" [columnMode]="'force'" [headerHeight]="50"
                [footerHeight]="50" [rowHeight]="'auto'" [limit]="10" [selectionType]="'single'" (select)="onSelectPlaylist($event)">
                    <ngx-datatable-column name="Playlist Name" prop="name"></ngx-datatable-column>
            </ngx-datatable>
        </div>
    </div>
    <div class="flex-container" fxLayout="row" fxLayoutAlign="center center" style="padding-top:40px;">
        <button md-raised-button  class="buttonGreen" (click)="dialogRef.close(selectedPlaylist)">Add</button>
    </div>
  </div>`
})
export class AddToPlaylistDialog {
    private selectedPlaylist: any;

    constructor(public dialogRef: MdDialogRef<AddToPlaylistDialog>, public playlistService: PlaylistService) { }

    getAllPlaylists(){
        return this.playlistService.getPlaylists();
    }

    onSelectPlaylist(row){
        this.selectedPlaylist = row.selected[0].name;
    }
}