import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-reponse';
import Swiper from 'swiper';

@Component({
  selector: 'app-caruselmultiples',
  templateUrl: './caruselmultiples.component.html',
  styleUrls: ['./caruselmultiples.component.css']
})
export class CaruselmultiplesComponent implements OnInit {
  @Input() PeliculaCastSlideMultiples:[Cast];
  constructor() { }
  public  mySwiper: Swiper;
  ngOnInit(): void {  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 8.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
}
