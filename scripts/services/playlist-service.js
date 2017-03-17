System.register(['@angular/core', 'angular-2-local-storage', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, angular_2_local_storage_1;
    var PlaylistService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular_2_local_storage_1_1) {
                angular_2_local_storage_1 = angular_2_local_storage_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            PlaylistService = (function () {
                function PlaylistService(localStorage) {
                    this.localStorage = localStorage;
                    this.playlists = this.localStorage.get("playlists");
                }
                PlaylistService.prototype.saveCurrentSelectionToStorage = function () {
                    this.localStorage.set("playlists", this.playlists);
                };
                PlaylistService.prototype.getPlaylists = function () {
                    if (this.playlists == null) {
                        this.playlists = new Array();
                        this.saveCurrentSelectionToStorage();
                    }
                    return this.playlists;
                };
                PlaylistService.prototype.addPlaylist = function (playlist) {
                    this.playlists.push(playlist);
                    this.saveCurrentSelectionToStorage();
                };
                PlaylistService.prototype.addTrackToPlaylist = function (playlistName, track) {
                    for (var i = 0; i < this.playlists.length; i++) {
                        var p = this.playlists[i];
                        if (p.name == playlistName) {
                            p.tracks.push(track);
                        }
                    }
                    this.saveCurrentSelectionToStorage();
                };
                PlaylistService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angular_2_local_storage_1.LocalStorageService])
                ], PlaylistService);
                return PlaylistService;
            }());
            exports_1("PlaylistService", PlaylistService);
        }
    }
});
//# sourceMappingURL=playlist-service.js.map