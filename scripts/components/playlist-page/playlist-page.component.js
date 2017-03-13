System.register(['@angular/core', '@angular/material', '../../models/playlist-model', '../../services/playlist-service'], function(exports_1, context_1) {
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
    var core_1, core_2, material_1, playlist_model_1, playlist_service_1;
    var PlaylistPageComponent, CreatePlaylistDialog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (playlist_model_1_1) {
                playlist_model_1 = playlist_model_1_1;
            },
            function (playlist_service_1_1) {
                playlist_service_1 = playlist_service_1_1;
            }],
        execute: function() {
            PlaylistPageComponent = (function () {
                function PlaylistPageComponent(dialog, playlistService) {
                    this.dialog = dialog;
                    this.playlistService = playlistService;
                    this.songSelected = new core_1.EventEmitter();
                    this.config = {
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
                    this.playlistComlumns = [
                        { prop: 'name', name: 'Playlist Name' }
                    ];
                    this.songColumns = [
                        { prop: 'songName', name: 'Song Name' }
                    ];
                    this.currentPlaylistSelection = playlistService.getPlaylists();
                    this.playlists = playlistService.getPlaylists();
                    this.selectedPlaylist = null;
                }
                PlaylistPageComponent.prototype.onPlaylistSelect = function (_a) {
                    var selected = _a.selected;
                    this.selectedPlaylist = selected[0];
                    this.currentTrackSelection = selected[0].tracks;
                };
                PlaylistPageComponent.prototype.onSongSelect = function (selectedSong) {
                    this.selectedSong = selectedSong.row;
                    this.songSelected.emit(this.selectedSong);
                };
                PlaylistPageComponent.prototype.updatePlaylistFilter = function (event) {
                    var val = event.target.value;
                    var temp = this.playlists.filter(function (d) {
                        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
                    });
                    this.currentPlaylistSelection = temp;
                };
                PlaylistPageComponent.prototype.updateSongFilter = function (event) {
                    var val = event.target.value;
                    var temp = this.selectedPlaylist.tracks.filter(function (d) {
                        return d.songName.toLowerCase().indexOf(val) !== -1 || !val;
                    });
                    this.currentTrackSelection = temp;
                };
                PlaylistPageComponent.prototype.openCreatePlaylistDialog = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(CreatePlaylistDialog, this.config);
                    dialogRef.afterClosed().subscribe(function (result) {
                        var playlist = new playlist_model_1.Playlist();
                        playlist.name = result;
                        _this.playlistService.addPlaylist(playlist);
                    });
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PlaylistPageComponent.prototype, "songSelected", void 0);
                PlaylistPageComponent = __decorate([
                    core_1.Component({
                        selector: 'playlist-page',
                        templateUrl: './scripts/components/playlist-page/playlist-page.component.html',
                        styleUrls: ['./scripts/components/playlist-page/playlist-page.component.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [material_1.MdDialog, playlist_service_1.PlaylistService])
                ], PlaylistPageComponent);
                return PlaylistPageComponent;
            }());
            exports_1("PlaylistPageComponent", PlaylistPageComponent);
            CreatePlaylistDialog = (function () {
                function CreatePlaylistDialog(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                CreatePlaylistDialog = __decorate([
                    core_1.Component({
                        selector: 'create-playlist-dialog',
                        template: "\n    <div layout=\"column\">\n    <div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-top:20px;\">\n        <md-input-container>\n            <input md-input placeholder=\"Playlist name\" #playlistName>\n        </md-input-container>\n    </div>\n    <div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <button md-raised-button  class=\"buttonGreen\" (click)=\"dialogRef.close(playlistName.value)\">Create</button>\n    </div>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [material_1.MdDialogRef])
                ], CreatePlaylistDialog);
                return CreatePlaylistDialog;
            }());
            exports_1("CreatePlaylistDialog", CreatePlaylistDialog);
        }
    }
});
//# sourceMappingURL=playlist-page.component.js.map