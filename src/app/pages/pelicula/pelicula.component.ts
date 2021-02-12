import { style } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponseDetalle } from 'src/app/interfaces/cartelera-detalle';

import { Cast } from 'src/app/interfaces/credits-reponse';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],

  })
export class PeliculaComponent implements OnInit {



  constructor(private ACtivateRouter:ActivatedRoute,
              private Peliculasservice: PeliculasService,
              private location:Location,
              private router: Router) { }

  public keyYutubepeliculas:string
  public PeliculaDescripcion:MovieResponseDetalle;
  public PeliculaCast: Cast[];


  ngOnInit(): void {
    const id = this.ACtivateRouter.snapshot.params.id;
    this.PeliculaDetalle(id);
    this.PeliculaCreadits(id)

    this.videoid(id);

  }

  Onregresar(){
    this.location.back();
  }

  private PeliculaDetalle(id){
    this.Peliculasservice.PeliculaDetalle(id)
    .subscribe(PeliculaDescripcionRespon => {
      if(PeliculaDescripcionRespon){
        this.PeliculaDescripcion=PeliculaDescripcionRespon;
      }else{
        this.router.navigateByUrl('/home')
      }
  });
  }

  private PeliculaCreadits(id){
    this.Peliculasservice.PeliculaCreadits(id)
    .subscribe(PeliculaDescripcionRespon => {
      this.PeliculaCast=PeliculaDescripcionRespon;
    });
  }

  private videoid(id){
    this.Peliculasservice.PeliculaVideo(id)
    .subscribe(Pelicula => {
          this.keyYutubepeliculas=Pelicula;
    });
  }
}
