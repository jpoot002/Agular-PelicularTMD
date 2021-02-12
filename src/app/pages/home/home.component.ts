import { Component, Host, HostListener, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/interfaces/cartelera-reponse';
import { PeliculasService } from '../../services/peliculas/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private Peliculasservice: PeliculasService){}
  public MovieResulHomeposter:MovieResult[]=[]
  public MovieResulHomeSlideshow:MovieResult[]=[]

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)
    const max = ((document.documentElement.scrollHeight || document.body.scrollHeight)-1270)
    if (pos>max) {
      this.Peliculasservice.GetCartelera()
      .subscribe(MovieResult => {
        this.MovieResulHomeposter.push(...MovieResult);
      }
      )
    }
  }

  ngOnInit(): void {
    this.Peliculasservice.GetCartelera()
      .subscribe(MovieResult => {
        this.MovieResulHomeposter = MovieResult;
        this.MovieResulHomeSlideshow = MovieResult;
    })

  }

  ngOnDestroy(){
    this.Peliculasservice.ResetCarteleraPage();
  }
}
