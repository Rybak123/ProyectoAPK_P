import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerMetasPersonalesComponent } from '../cuerpo/metasPersonales/ver-metas-personales/ver-metas-personales.component';
import { VerFavoritosComponent } from './misFavoritos/ver-favoritos/ver-favoritos.component';
import { CrearFavoritoComponent } from './misFavoritos/crear-favorito/crear-favorito.component';

@NgModule({
  declarations: [VerMetasPersonalesComponent, VerFavoritosComponent, CrearFavoritoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[VerMetasPersonalesComponent]
})
export class CuerpoModule { }
