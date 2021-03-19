import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { DetalleCiclosComponent } from './components/detalle-ciclos/detalle-ciclos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent}, 
  {path:'ciclos', component:CiclosComponent}, 
  {path:'asignaturas', component:AsignaturasComponent}, 
  {path:'detalle-ciclos/:curso/:nombre', component:DetalleCiclosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
