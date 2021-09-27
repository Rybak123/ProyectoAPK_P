import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerCancionesComponent } from '../ver-canciones/ver-canciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [VerCancionesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports:[VerCancionesComponent]
})
export class VerCancionesModule { }
