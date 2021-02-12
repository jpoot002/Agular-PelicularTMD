import { Component, OnInit, Host, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResult } from 'src/app/interfaces/cartelera-reponse';
import { PeliculasService } from '../../services/peliculas/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public MovieBuscador:MovieResult[]=[]
  TxtBuscar:string ;


  constructor(private ActRouter:ActivatedRoute,
              private ServicePeliculas:PeliculasService) { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)
    const max = ((document.documentElement.scrollHeight || document.body.scrollHeight)-1270)
    if (pos>max) {

      this.ActRouter.params.subscribe( params=>{
        this.TxtBuscar=params.id;
        this.ServicePeliculas.Buscardor(params.id)
        .subscribe(MoviesBuscar => {
          this.MovieBuscador.push(...MoviesBuscar);
        });
      })
    }
  }

  ngOnInit(): void {
    this.ActRouter.params.subscribe( params=>{
      this.TxtBuscar=params.id;
      this.ServicePeliculas.Buscardor(params.id).subscribe(MoviesBuscar => {
        this.MovieBuscador=MoviesBuscar
      });
    })
  }


  ngOnDestroy(){
    this.ServicePeliculas.ResetCarteleraPageBuscador();
  }

}

