import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongListComponent } from './components/song-list/song-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

const routes: Routes = [
  {
    // Este cambiare por el de albumes, por mientras pongo el de canciones (song)
    path : '',
    redirectTo : '/album',
    pathMatch : 'full'
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
