import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { asignaturaInterface } from 'src/app/utils/asignaturasInterface';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  listaAsignaturas: asignaturaInterface[] = []

  constructor(private servicioAsignaturas: AsignaturasService) { }

  ngOnInit(): void {

    this.listaAsignaturas = this.servicioAsignaturas.getAsignaturas()
  }

  cargarAsignaturas(nombre: string, ciclo: string, conocimiento: string): asignaturaInterface[]{
    return this.listaAsignaturas = []

    
    
  }

}
