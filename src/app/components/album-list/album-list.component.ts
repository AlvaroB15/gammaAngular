import { Component, OnInit, HostBinding } from '@angular/core';

// Importar el AlbumService
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  albums : any = [];

  // public idAlbum : number;

  // @Input() idAlbum:boolean = false;


  constructor( private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albums = "";
    this.albumService.getAlbums().subscribe(
      res => {
        // console.log(res)
        this.albums = res;
      },
      err => console.error(err)
    );
  }
  // a : number = path.arguments;

  // FALTA VER COMO SE VE EL ID DE LA RUTA MANDADA, PARA PONERLO COMO PARAMETRO

  // limpiarId(){
  //   this,this.idAlbum = 0;
  // }

  // guardarId(idParametro:number){
  //   this.limpiarId();
  //   return this.idAlbum = idParametro; 
  // }

}
