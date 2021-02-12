import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasposterComponent } from './peliculasposter/peliculasposter.component';
import { PipesModule } from '../pipes/pipes.module';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { RatingModule } from 'ng-starrating';
import { CarouselComponent } from './carousel/carousel.component';
import { CaruselmultiplesComponent } from './caruselmultiples/caruselmultiples.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasposterComponent,
    CarouselComponent,
    CaruselmultiplesComponent,
    YoutubeplayerComponent
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    PeliculasposterComponent,
    CaruselmultiplesComponent,
    YoutubeplayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
    YouTubePlayerModule,
  ],

})
export class ComponenetsModule { }
