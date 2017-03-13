System.register(['@angular/core', '@angular/platform-browser', '@angular/http', './vgsongplayer.component', './components/main-track-page/main-track-page.component', './components/media-player/media-player.component', './components/playlist-page/playlist-page.component', '@swimlane/ngx-datatable', '@angular/material', "@angular/flex-layout", './services/playlist-service', 'hammerjs'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, vgsongplayer_component_1, main_track_page_component_1, media_player_component_1, playlist_page_component_1, ngx_datatable_1, material_1, flex_layout_1, playlist_service_1;
    var VGSongPlayerModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (vgsongplayer_component_1_1) {
                vgsongplayer_component_1 = vgsongplayer_component_1_1;
            },
            function (main_track_page_component_1_1) {
                main_track_page_component_1 = main_track_page_component_1_1;
            },
            function (media_player_component_1_1) {
                media_player_component_1 = media_player_component_1_1;
            },
            function (playlist_page_component_1_1) {
                playlist_page_component_1 = playlist_page_component_1_1;
            },
            function (ngx_datatable_1_1) {
                ngx_datatable_1 = ngx_datatable_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (flex_layout_1_1) {
                flex_layout_1 = flex_layout_1_1;
            },
            function (playlist_service_1_1) {
                playlist_service_1 = playlist_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            VGSongPlayerModule = (function () {
                function VGSongPlayerModule() {
                }
                VGSongPlayerModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, ngx_datatable_1.NgxDatatableModule, material_1.MaterialModule.forRoot(), flex_layout_1.FlexLayoutModule.forRoot()],
                        declarations: [vgsongplayer_component_1.VGSongPlayerComponent, main_track_page_component_1.MainTrackPageComponent, media_player_component_1.MediaPlayerComponent, playlist_page_component_1.PlaylistPageComponent, main_track_page_component_1.AddToPlaylistDialog, playlist_page_component_1.CreatePlaylistDialog],
                        entryComponents: [playlist_page_component_1.CreatePlaylistDialog, main_track_page_component_1.AddToPlaylistDialog],
                        bootstrap: [vgsongplayer_component_1.VGSongPlayerComponent],
                        providers: [playlist_service_1.PlaylistService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VGSongPlayerModule);
                return VGSongPlayerModule;
            }());
            exports_1("VGSongPlayerModule", VGSongPlayerModule);
        }
    }
});
//# sourceMappingURL=vgsongplayer.module.js.map