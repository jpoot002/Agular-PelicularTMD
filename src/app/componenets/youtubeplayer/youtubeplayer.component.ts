import { Component, Input, OnInit } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.css']
})
export class YoutubeplayerComponent implements OnInit {

  constructor() { }

  @Input() keyYutubePlayer:string

  ngOnInit(): void {
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
    console.log(this.keyYutubePlayer)


  }


}
let apiLoaded = false;

