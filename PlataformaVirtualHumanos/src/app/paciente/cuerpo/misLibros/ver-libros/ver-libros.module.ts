import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerLibrosComponent } from '../ver-libros/ver-libros.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerLibrosComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[VerLibrosComponent]
})
export class VerLibrosModule { }
