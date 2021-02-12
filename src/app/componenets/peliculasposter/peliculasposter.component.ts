import { HtmlParser } from '@angular/compiler';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/interfaces/cartelera-reponse';

@Component({
  selector: 'app-peliculasposter',
  templateUrl: './peliculasposter.component.html',
  styleUrls: ['./peliculasposter.component.css']
})

export class PeliculasposterComponent implements OnInit {
  @Input() MovieResulPeliculas:MovieResult[];

  constructor(private Router:Router) {}

  ngOnInit(): void {  }

  OnMovieClick(Movie:MovieResult){
    this.Router.navigate(['pelicula',Movie.id])
  }

}
