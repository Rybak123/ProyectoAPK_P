import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { BarraDeNavegacionComponent } from './paciente/barra-de-navegacion/barra-de-navegacion.component';
import { CuerpoComponent } from './paciente/cuerpo/cuerpo.component';
import { ControlDeEstudioComponent } from './paciente/Cuerpo/control-de-estudio/control-de-estudio.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
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
    FullCalendarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
