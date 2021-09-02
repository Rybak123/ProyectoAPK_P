import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { BarraDeNavegacionComponent } from './paciente/barra-de-navegacion/barra-de-navegacion.component';
import { CuerpoComponent } from './paciente/cuerpo/cuerpo.component';
import { ControlDeEstudioComponent } from './paciente/Cuerpo/control-de-estudio/control-de-estudio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    CuerpoComponent,
    PacienteComponent,
    ControlDeEstudioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
