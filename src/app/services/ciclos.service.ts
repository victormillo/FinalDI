import { Injectable } from '@angular/core';
import { asignaturaInterface } from '../utils/asignaturasInterface';
import { ciclosInterface } from '../utils/ciclosInterface';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  constructor() { }

  ciclo: ciclosInterface[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },

    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ]

  getCiclos(): ciclosInterface[]{
    return this.ciclo;
  }

  getFiltrarCiclo(busqueda: string): ciclosInterface[]{
    return this.ciclo.filter((elemento) => {return elemento})
  }

}
