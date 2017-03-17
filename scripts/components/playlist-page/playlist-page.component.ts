import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Inject, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { Playlist } from '../../models/playlist-model';
import { Track } from '../../models/track-model';
import { PlaylistService } from '../../services/playlist-service';

@Component({
    selector: 'playlist-page',
    templateUrl: './scripts/components/playlist-page/playlist-page.component.html',
    styleUrls: ['./scripts/components/playlist-page/playlist-page.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PlaylistPageComponent{
    @Output() songSelected: EventEmitter<Track> = new EventEmitter();

    private playlists: Playlist[];
    private currentPlaylistSelection : Playlist[];

    private selectedPlaylist: Playlist;
    private currentTrackSelection: Track[];

    private selectedSong: any;

    lastCloseResult: string;
    actionsAlignment: string;
    config: MdDialogConfig = {
        disableClose: false,
        width: '30%',
        height: '20%',
        position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
        }
    };

    playlistComlumns = [
        { prop: 'name', name:'Playlist Name' }
    ];

    songColumns = [
        { prop: 'songName', name:'Song Name' }
    ];

    constructor(public dialog: MdDialog, public playlistService: PlaylistService) {
        this.currentPlaylistSelection = playlistService.getPlaylists();
        this.playlists = playlistService.getPlaylists();
        this.selectedPlaylist = null;
        this.currentTrackSelection = null;
    }

    onPlaylistSelect({ selected }) {
        this.selectedPlaylist = selected[0];
        this.currentTrackSelection = selected[0].tracks;
    }

    onSongSelect(selectedSong) {
        this.selectedSong = selectedSong.row;
        this.songSelected.emit(this.selectedSong);
    }

    updatePlaylistFilter(event) {
        let val = event.target.value;

        let temp = this.playlists.filter(function(d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        this.currentPlaylistSelection = temp;
    }

    updateSongFilter(event) {
        let val = event.target.value;

        let temp = this.selectedPlaylist.tracks.filter(function(d) {
            return d.songName.toLowerCase().indexOf(val) !== -1 || !val;
        });

        this.currentTrackSelection = temp;
    }

    openCreatePlaylistDialog(){
        let dialogRef = this.dialog.open(CreatePlaylistDialog, this.config);
        dialogRef.afterClosed().subscribe(result => {
            let playlist = new Playlist();
            playlist.name = result;
            playlist.tracks = [];

            this.playlistService.addPlaylist(playlist);
        });
    }
}

@Component({
  selector: 'create-playlist-dialog',
  template: `
    <div layout="column">
    <div class="flex-container" fxLayout="row" fxLayoutAlign="center center" style="padding-top:20px;">
        <md-input-container>
            <input md-input placeholder="Playlist name" #playlistName>
        </md-input-container>
    </div>
    <div class="flex-container" fxLayout="row" fxLayoutAlign="center center">
        <button md-raised-button  class="buttonGreen" (click)="dialogRef.close(playlistName.value)">Create</button>
    </div>
  </div>`
})
export class CreatePlaylistDialog {
  constructor(public dialogRef: MdDialogRef<CreatePlaylistDialog>) { }
}