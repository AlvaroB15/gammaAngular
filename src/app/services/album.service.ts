import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  API_URI = 'https://api-rest-gammaray.herokuapp.com';
  // API_URI = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getAlbums(){
    return this.http.get(`${this.API_URI}/album`);
  }

  getAlbum(id: number){
    return this.http.get(`${this.API_URI}/album/${id}`);
  }

  
}
