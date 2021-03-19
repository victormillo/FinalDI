import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editImagen'
})
export class EditImagenPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length == 0){
      return 'assets/images/boots.png'
    }
    return value;
  }

}
