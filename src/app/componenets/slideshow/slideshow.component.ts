import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/interfaces/cartelera-reponse';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit{

  @Input() MovieResulSlide:MovieResult[];
  constructor() { }

  public  mySwiper: Swiper;

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }


}
