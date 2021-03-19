import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { CiclosService } from 'src/app/services/ciclos.service';
import { asignaturaInterface } from 'src/app/utils/asignaturasInterface';
import { ciclosInterface } from 'src/app/utils/ciclosInterface';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  
  listaCiclos: ciclosInterface[] = []
  listaDam: asignaturaInterface[] = []
  listaDaw: asignaturaInterface[] = []

  constructor(private rutas: Router, private conexionDatos: CiclosService, private conexionServicios: AsignaturasService) { }

  ngOnInit(): void {
      this.listaCiclos = this.conexionDatos.getCiclos()
      this.listaDam = this.conexionServicios.getAgregarAsignatura("DAM")
      this.listaDaw = this.conexionServicios.getAgregarAsignatura("DAW")
  }

  verDetalle(ruta: string, ciclo: number, nombre: string){
      this.rutas.navigate([ruta, ciclo, nombre])
  }

}
