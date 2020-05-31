import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';


import { SongService } from './services/song.service';
import { AlbumService } from './services/album.service';

import { FotosListComponent } from './components/fotos-list/fotos-list.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlbumListComponent,
    SongListComponent,
    SongDetailsComponent,
    FotosListComponent,
    VideosListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SongService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
