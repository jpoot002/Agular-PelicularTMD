import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster/poster.pipe';
import { PosterbackdropPipe } from './posterbackdrop/posterbackdrop.pipe';

@NgModule({
  declarations: [
  PosterPipe,
  PosterbackdropPipe
],
  imports: [
    CommonModule
  ],
  exports:[
    PosterPipe,
    PosterbackdropPipe
  ]
})
export class PipesModule { }
