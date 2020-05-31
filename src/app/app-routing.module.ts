import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongListComponent } from './components/song-list/song-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

import { FotosListComponent } from './components/fotos-list/fotos-list.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    // Este cambiare por el de albumes, por mientras pongo el de canciones (song)
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },

  {
    path: 'home',
    component : HomeComponent
  },

  {
    path: 'multimedia/foto',
    component : FotosListComponent
  },

  {
    path: 'multimedia/video',
    component : VideosListComponent
  },

  {
    path: 'album',
    component : AlbumListComponent
  },

  {
    path : 'song/:id',
    component : SongListComponent
  },

  {
    path : 'detail/:id',
    component : SongDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
