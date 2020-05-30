import { Component, OnInit  } from '@angular/core';

import { SongService } from '../../services/song.service';

import { ActivatedRoute } from '@angular/router';

import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  videoUrl: SafeResourceUrl;
  dangerousVideoUrl: string;
  // @HostBinding('class') classes = 'row';
  details : any = [];
  video : string;

  constructor( private songService : SongService , private activatedRoute : ActivatedRoute, private sanitizer: DomSanitizer ) {  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    this.songService.getSong(params.id).subscribe(
      res => {
        console.log(res)
        this.details = res;
        console.log(this.details);
        this.video = this.details[0].link_video;
        console.log(this.video);
        this.updateVideoUrl(this.video);
      },
      err => console.error(err)
    );
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
