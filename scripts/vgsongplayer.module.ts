import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { VGSongPlayerComponent }  from './vgsongplayer.component';
import { MainTrackPageComponent, AddToPlaylistDialog } from './components/main-track-page/main-track-page.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { PlaylistPageComponent, CreatePlaylistDialog } from './components/playlist-page/playlist-page.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PlaylistService } from './services/playlist-service';

import 'hammerjs'

@NgModule({
  imports:      [ BrowserModule, HttpModule, NgxDatatableModule, MaterialModule.forRoot(), FlexLayoutModule.forRoot() ],
  declarations: [ VGSongPlayerComponent, MainTrackPageComponent, MediaPlayerComponent, PlaylistPageComponent, AddToPlaylistDialog, CreatePlaylistDialog ],
  entryComponents: [CreatePlaylistDialog, AddToPlaylistDialog],
  bootstrap:    [ VGSongPlayerComponent ],
  providers: [ PlaylistService ]
})
export class VGSongPlayerModule { }