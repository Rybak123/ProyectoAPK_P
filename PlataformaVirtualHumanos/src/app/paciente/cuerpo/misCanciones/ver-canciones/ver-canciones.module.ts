import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerCancionesComponent } from '../ver-canciones/ver-canciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [VerCancionesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[VerCancionesComponent]
})
export class VerCancionesModule { }
