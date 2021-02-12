import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterbackdrop'
})
export class PosterbackdropPipe implements PipeTransform {

  transform(value: string): string {

    if (value) {
    return  'url(https://image.tmdb.org/t/p/w500'+value+')'
   } else {
    return  'url(../../../assets/imagen/no-image-lateral.jpg)'
   }
  }

}


