import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videoUrl: SafeResourceUrl;
  dangerousVideoUrl: string;
  videoA = [
    {titulo: "Concierto Gamma Ray Lust For Live 10", link: "https://www.youtube.com/embed/MJsrN4FBg_c"},
    {titulo: "Gamma Ray - Live Gates Of Metal (2003)", link: "https://www.youtube.com/embed/6pwjFLohTx8"},
    {titulo: "Gamma Ray - Heading For The East", link: "https://www.youtube.com/embed/EQiTdNt-W2s"},
    {titulo: "Helloween - Starlight, Ride the Sky, Judas, Heavy Metal (Is the Law)", link: "https://www.youtube.com/embed/WF9EBpVas9Y"},
    {titulo: "Gamma Ray - Live in São Paulo (1997)", link: "https://www.youtube.com/embed/C_W0XEIzQ_4"},
  ];

  // videoArreglo = ["https://www.youtube.com/embed/MJsrN4FBg_c","https://www.youtube.com/embed/6pwjFLohTx8", "https://www.youtube.com/embed/EQiTdNt-W2s", "https://www.youtube.com/embed/8FKeY61hW88", "https://www.youtube.com/embed/C_W0XEIzQ_4"];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    
  }


}
