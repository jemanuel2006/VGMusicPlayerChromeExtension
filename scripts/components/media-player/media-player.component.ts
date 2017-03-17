import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'media-player',
    templateUrl: './scripts/components/media-player/media-player.component.html',
    styleUrls: ['./scripts/components/media-player/media-player.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class MediaPlayerComponent{
    @Input('songUrl') trackSrc: any;
    @Input('songName') songName: any;
    @Output() currentSongEnded: EventEmitter<any> = new EventEmitter();
    currentTimeElapsed: any;
    audioPlayer: any;
    isPlaying: any;

    constructor(){
        this.audioPlayer = new Audio();
        this.isPlaying = false;
        this.currentTimeElapsed = 0.0;
        this.resetAudio();
    }

    ngAfterViewInit(){
        this.audioPlayer.ontimeupdate = () => this.currentTimeElapsed = this.audioPlayer.currentTime;
        this.audioPlayer.onended = () => this.currentSongEnded.emit(null);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        let changedTrackSrc = changes['trackSrc'];

        if(changedTrackSrc && changedTrackSrc.currentValue){
            this.setSong(changes['trackSrc'].currentValue);
            this.toggleAudio(true);
        } else{
            this.resetAudio();
        }
    }

    setSong(url){
        this.trackSrc = url;
        this.audioPlayer.src = url;
    }

    toggleAudio(forcePlay = false){
        if(this.audioPlayer.paused || forcePlay){
            this.audioPlayer.play();
            this.isPlaying = true
        } else {
            this.audioPlayer.pause();
            this.isPlaying = false;
        }
    }

    resetAudio(){
        if(this.isPlaying)
            this.audioPlayer.stop();
        
        this.isPlaying = false;
        this.currentTimeElapsed = 0.0;
        this.songName = null;
    }
}