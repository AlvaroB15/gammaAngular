import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API_URI = 'https://api-rest-gammaray.herokuapp.com';
  // API_URI = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getSongs(){
    return this.http.get(`${this.API_URI}/cancion`);
  }

  getSong(id: number){
    return this.http.get(`${this.API_URI}/cancion/${id}`);
  }

  getSongOfAlbum(id : number){
    return this.http.get(`${this.API_URI}/cancion/cancionDeAlbum/${id}`);
  }



}
