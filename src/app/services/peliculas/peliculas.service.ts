import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { CarteleraResult, MovieResult } from '../../interfaces/cartelera-reponse'
import { MovieResponseDetalle } from '../../interfaces/cartelera-detalle'
import { CreaditsReporteMovie } from '../../interfaces/credits-reponse'
import { CreatiVideo } from '../../interfaces/cartelera-video'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseurl:string = 'https://api.themoviedb.org/3';
  private cartelerapage:number=1;
  private cartelerapagebuscador:number=1;
  public cargando: boolean;

  constructor(private http: HttpClient) { }

  get params(){
    return{
      api_key:'6e711de9cbfbf65618f3b802439dd53b',
      language:'es-ES',
      page:this.cartelerapage.toString()
    }
  }

  GetCartelera():Observable<MovieResult[]>{
    if(this.cargando){
      return of([])
    }
    this.cargando = true;
    return this.http.get<CarteleraResult>(this.baseurl +'/movie/now_playing',{
      params:this.params
    },).pipe(
      map( (MovieResult) => MovieResult.results  ),
      tap( ()=>{
        this.cartelerapage+=1;
        this.cargando = false;
      }),
    )
  }

  ResetCarteleraPage(){
    this.cartelerapage=1;
  }

  ResetCarteleraPageBuscador(){
    this.cartelerapagebuscador=1;
  }



  Buscardor(PeliculasBuscar:string):Observable<MovieResult[]>{
    if(this.cargando){
      return of([])
    }
    this.cargando = true;

    const params = {...this.params, query:PeliculasBuscar,page:this.cartelerapagebuscador.toString()};
    return this.http.get<CarteleraResult>(this.baseurl +'/search/movie',{
      params
    },).pipe(
      map( (MovieResult) => MovieResult.results  ),
      tap( ()=>{
        this.cartelerapagebuscador+=1;
        this.cargando = false;
      }),
    )

}



  PeliculaDetalle(idpelicula:string){
    return this.http.get<MovieResponseDetalle>(this.baseurl +'/movie/'+idpelicula+'?',
    { params:this.params}).pipe(
      catchError(err=> of(null))
    )
  }

  PeliculaCreadits(idpelicula:string){
    return this.http.get<CreaditsReporteMovie>(this.baseurl+'/movie/'+idpelicula+'/credits?',{
      params:this.params}).pipe(
      map(resp=> resp.cast),
      catchError(err=> of(null)
      )
    )
  }

  PeliculaVideo(idpelicula:string){
    return this.http.get<CreatiVideo>(this.baseurl+'/movie/'+idpelicula+'/videos?',{
      params:this.params}).pipe(
        map(Result=>Result.results[0].key),
        catchError(err=> of(null))
      )
  }

}


