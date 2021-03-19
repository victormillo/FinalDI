import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { CiclosService } from 'src/app/services/ciclos.service';
import { asignaturaInterface } from 'src/app/utils/asignaturasInterface';
import { ciclosInterface } from 'src/app/utils/ciclosInterface';

@Component({
  selector: 'app-detalle-ciclos',
  templateUrl: './detalle-ciclos.component.html',
  styleUrls: ['./detalle-ciclos.component.css']
})
export class DetalleCiclosComponent implements OnInit {

  ciclos: ciclosInterface[] = []
  asignaturas: asignaturaInterface[] = []
  conocimientos: any[] = []
  curso: number = 0
  nombreCurso: string = ""
  imagenCurso: string = ""

  constructor(private ruta: ActivatedRoute, private conexionAsignaturas: AsignaturasService, private conexionCiclos: CiclosService) { }

  ngOnInit(): void {

    this.curso = this.ruta.snapshot.params.curso;
    this.nombreCurso = this.ruta.snapshot.params.nombre;
    this.ciclos = this.conexionCiclos.getCiclos()
    this.ciclos.forEach(ciclo =>{
      this.imagenCurso = ciclo.imagen
    })
    this.asignaturas = this.conexionAsignaturas.getFiltrarAsignatura(this.nombreCurso, this.curso)
    this.asignaturas.forEach(asignatura =>{
        this.conocimientos.push(asignatura.conocimientos)
    }); 
    
    
  }

  agregarDetalles(){

  }

}
