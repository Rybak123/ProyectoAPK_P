import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerMetasPersonalesComponent } from '../cuerpo/metasPersonales/ver-metas-personales/ver-metas-personales.component';
import { VerFavoritosComponent } from './misFavoritos/ver-favoritos/ver-favoritos.component';
import { CrearFavoritoComponent } from './misFavoritos/crear-favorito/crear-favorito.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AuthImagePipe } from 'src/app/_helpers/basic.pipe';
import { VerLibrosComponent } from './misLibros/ver-libros/ver-libros.component';
import { VerCancionesComponent } from './misCanciones/ver-canciones/ver-canciones.component';
import { CalificarMesComponent } from './calificar-mes/calificar-mes.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
  
  
  ],
  imports: [
    FullCalendarModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class CuerpoModule { }
