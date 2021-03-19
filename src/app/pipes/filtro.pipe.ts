import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    /*const resultadoFiltro = []
    for(const asignatura of value){
      if(asignatura.nombre.indexOf(arg) > -1){
        console.log('eyo eyoooo');
        
      }
    } */
  }

}
