System.register(['@angular/core', '../../services/songs-service', '@angular/material', '../../services/playlist-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, songs_service_1, material_1, playlist_service_1;
    var MainTrackPageComponent, AddToPlaylistDialog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (songs_service_1_1) {
                songs_service_1 = songs_service_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (playlist_service_1_1) {
                playlist_service_1 = playlist_service_1_1;
            }],
        execute: function() {
            MainTrackPageComponent = (function () {
                function MainTrackPageComponent(songsService, playlistService, dialog) {
                    this.songsService = songsService;
                    this.playlistService = playlistService;
                    this.dialog = dialog;
                    this.config = {
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
                    this.albumColumns = [
                        { prop: 'albumName', name: 'Album Name' }
                    ];
                    this.trackColumns = [
                        { prop: 'songName', name: 'Song Name' }
                    ];
                    this.selectedAlbum = null;
                    this.selectedSong = null;
                }
                MainTrackPageComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.songsService.getSongs().subscribe(function (albums) {
                        _this.allAlbums = albums;
                        _this.currentAlbumSelection = albums;
                    }, function (error) { return _this.errorMessage; });
                };
                MainTrackPageComponent.prototype.onAlbumSelect = function (_a) {
                    var selected = _a.selected;
                    this.selectedAlbum = selected[0].tracks;
                    this.currentSelectedAlbumSelection = selected[0].tracks;
                };
                MainTrackPageComponent.prototype.onSongSelect = function (rowEvent) {
                    if (rowEvent.type == "dblclick") {
                        this.selectedSong = rowEvent.row;
                    }
                };
                MainTrackPageComponent.prototype.updateAlbumFilter = function (event) {
                    var val = event.target.value;
                    // filter our data
                    var temp = this.allAlbums.filter(function (d) {
                        return d.albumName.toLowerCase().indexOf(val) !== -1 || !val;
                    });
                    // update the rows
                    this.currentAlbumSelection = temp;
                };
                MainTrackPageComponent.prototype.updateSongFilter = function (event) {
                    var val = event.target.value;
                    // filter our data
                    var temp = this.selectedAlbum.filter(function (d) {
                        return d.songName.toLowerCase().indexOf(val) !== -1 || !val;
                    });
                    // update the rows
                    this.currentSelectedAlbumSelection = temp;
                };
                MainTrackPageComponent.prototype.openCreatePlaylistDialog = function (row) {
                    var _this = this;
                    var dialogRef = this.dialog.open(AddToPlaylistDialog, this.config);
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this.playlistService.addTrackToPlaylist(result, row);
                    });
                };
                MainTrackPageComponent = __decorate([
                    core_1.Component({
                        selector: 'tracks-component',
                        templateUrl: './scripts/components/main-track-page/main-track-page.component.html',
                        styleUrls: ['./scripts/components/main-track-page/main-track-page.component.css'],
                        providers: [songs_service_1.SongsService],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [songs_service_1.SongsService, playlist_service_1.PlaylistService, material_1.MdDialog])
                ], MainTrackPageComponent);
                return MainTrackPageComponent;
            }());
            exports_1("MainTrackPageComponent", MainTrackPageComponent);
            AddToPlaylistDialog = (function () {
                function AddToPlaylistDialog(dialogRef, playlistService) {
                    this.dialogRef = dialogRef;
                    this.playlistService = playlistService;
                }
                AddToPlaylistDialog.prototype.getAllPlaylists = function () {
                    return this.playlistService.getPlaylists();
                };
                AddToPlaylistDialog.prototype.onSelectPlaylist = function (row) {
                    this.selectedPlaylist = row.selected[0].name;
                };
                AddToPlaylistDialog = __decorate([
                    core_1.Component({
                        selector: 'add-to-playlist-dialog',
                        template: "\n    <div layout=\"column\">\n    <div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-top:20px;\">\n        <div class=\"flex-item\" fxFlex=\"100%\">\n            <ngx-datatable\n                [rows]=\"getAllPlaylists()\" class=\"material\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [selectionType]=\"'single'\" (select)=\"onSelectPlaylist($event)\">\n                    <ngx-datatable-column name=\"Playlist Name\" prop=\"name\"></ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n    </div>\n    <div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-top:40px;\">\n        <button md-raised-button  class=\"buttonGreen\" (click)=\"dialogRef.close(selectedPlaylist)\">Add</button>\n    </div>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [material_1.MdDialogRef, playlist_service_1.PlaylistService])
                ], AddToPlaylistDialog);
                return AddToPlaylistDialog;
            }());
            exports_1("AddToPlaylistDialog", AddToPlaylistDialog);
        }
    }
});
//# sourceMappingURL=main-track-page.component.js.map