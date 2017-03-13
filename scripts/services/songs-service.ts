import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response} from '@angular/http';
import { AlbumInfo } from '../models/album-model';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()

export class SongsService{
    private albumInfoList: Observable<AlbumInfo[]>;
    private apiUrl = "http://localhost:8080";

    constructor(private http: Http){
        this.albumInfoList = null;
    }

    getSongs(){
        if(this.albumInfoList == null){
            this.albumInfoList = this.http.get(this.apiUrl + "/gettracks").map((res:Response) => <AlbumInfo[]>res.json());
        }

        return this.albumInfoList;
    }
}