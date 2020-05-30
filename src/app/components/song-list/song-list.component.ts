import { Component, OnInit, HostBinding } from '@angular/core';

// importar el SongService
import { SongService } from '../../services/song.service';

import { AlbumService } from '../../services/album.service';

import { ActivatedRoute } from '@angular/router';

// import { idAlbum } from '../album-list/album-list.component'

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  // @Output() emitEvent:EventEmitter<number> = new EventEmitter<number>();

  @HostBinding('class') classes = 'row';

  songs : any = [];

  album : any = [];

  constructor( private songService : SongService, private activatedRoute : ActivatedRoute, private albumService : AlbumService) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    this.songService.getSongOfAlbum(params.id).subscribe(
      res => {
        console.log(res)
        this.songs = res;
      },
      err => console.error(err)
    );

    this.albumService.getAlbum(params.id).subscribe(
      res => {
        console.log(res)
        this.album = res;
      },
      err => console.error(err)
    );
  }

  // verMas(id : string) {
  //   console.log(id);
  // }

}
