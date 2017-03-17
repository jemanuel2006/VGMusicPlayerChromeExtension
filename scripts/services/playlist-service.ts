import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response} from '@angular/http';
import { Playlist } from '../models/playlist-model';
import { LocalStorageService } from 'angular-2-local-storage';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()

export class PlaylistService{
    private playlists: Playlist[];

    constructor(private localStorage: LocalStorageService){
        this.playlists = <Playlist[]>this.localStorage.get("playlists");
    }

    saveCurrentSelectionToStorage(){
        this.localStorage.set("playlists", this.playlists);
    }

    getPlaylists(){
        if(this.playlists == null){
            this.playlists = new Array<Playlist>();
            this.saveCurrentSelectionToStorage();
        }

        return this.playlists;
    }

    addPlaylist(playlist){
        this.playlists.push(playlist);
        this.saveCurrentSelectionToStorage();
    }

    addTrackToPlaylist(playlistName, track){
        for(var i = 0; i < this.playlists.length; i++){
            let p = this.playlists[i];
            if(p.name == playlistName){
                p.tracks.push(track);
            }
        }

        this.saveCurrentSelectionToStorage();
    }
}