import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response} from '@angular/http';
import { Playlist } from '../models/playlist-model';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()

export class PlaylistService{
    private playlists: Playlist[];

    constructor(private http: Http){
        this.playlists = null;
    }

    getPlaylists(){
        if(this.playlists == null){
            this.playlists = new Array<Playlist>();
            let p = new Playlist();
            p.name = "Teste";
            p.tracks = [];
            this.addPlaylist(p);
        }

        return this.playlists;
    }

    addPlaylist(playlist){
        this.playlists.push(playlist);
    }

    addTrackToPlaylist(playlistName, track){
        for(var i = 0; i < this.playlists.length; i++){
            let p = this.playlists[i];
            if(p.name == playlistName){
                p.tracks.push(track);
            }
        }
    }
}