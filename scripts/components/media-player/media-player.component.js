System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var MediaPlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            MediaPlayerComponent = (function () {
                function MediaPlayerComponent() {
                    this.audioPlayer = new Audio();
                    this.isPlaying = false;
                    this.currentTimeElapsed = 0.0;
                    this.resetAudio();
                }
                MediaPlayerComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.audioPlayer.ontimeupdate = function () { return _this.currentTimeElapsed = _this.audioPlayer.currentTime; };
                };
                MediaPlayerComponent.prototype.ngOnChanges = function (changes) {
                    console.log(changes);
                    var changedTrackSrc = changes['trackSrc'];
                    if (changedTrackSrc && changedTrackSrc.currentValue) {
                        this.setSong(changes['trackSrc'].currentValue);
                        this.toggleAudio(true);
                    }
                    else {
                        this.resetAudio();
                    }
                };
                MediaPlayerComponent.prototype.setSong = function (url) {
                    this.trackSrc = url;
                    this.audioPlayer.src = url;
                };
                MediaPlayerComponent.prototype.toggleAudio = function (forcePlay) {
                    if (forcePlay === void 0) { forcePlay = false; }
                    if (this.audioPlayer.paused || forcePlay) {
                        this.audioPlayer.play();
                        this.isPlaying = true;
                    }
                    else {
                        this.audioPlayer.pause();
                        this.isPlaying = false;
                    }
                };
                MediaPlayerComponent.prototype.resetAudio = function () {
                    if (this.isPlaying)
                        this.audioPlayer.stop();
                    this.isPlaying = false;
                    this.currentTimeElapsed = 0.0;
                    this.songName = null;
                };
                __decorate([
                    core_2.Input('songUrl'), 
                    __metadata('design:type', Object)
                ], MediaPlayerComponent.prototype, "trackSrc", void 0);
                __decorate([
                    core_2.Input('songName'), 
                    __metadata('design:type', Object)
                ], MediaPlayerComponent.prototype, "songName", void 0);
                MediaPlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'media-player',
                        templateUrl: './scripts/components/media-player/media-player.component.html',
                        styleUrls: ['./scripts/components/media-player/media-player.component.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MediaPlayerComponent);
                return MediaPlayerComponent;
            }());
            exports_1("MediaPlayerComponent", MediaPlayerComponent);
        }
    }
});
//# sourceMappingURL=media-player.component.js.map