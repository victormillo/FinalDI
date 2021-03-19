import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetalleCiclosComponent } from './components/detalle-ciclos/detalle-ciclos.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { EditImagenPipe } from './pipes/editimagen.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CiclosComponent,
    AsignaturasComponent,
    DetalleCiclosComponent,
    FiltroPipe,
    EditImagenPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
