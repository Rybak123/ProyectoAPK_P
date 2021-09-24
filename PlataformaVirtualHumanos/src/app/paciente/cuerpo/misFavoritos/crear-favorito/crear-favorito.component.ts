import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {MisFavoritosDAO} from '../../../../_services/MisFavoritosServices/MisFavoritosDAO'

@Component({
  selector: 'app-crear-favorito',
  templateUrl: './crear-favorito.component.html',
  styleUrls: ['./crear-favorito.component.scss']
})
export class CrearFavoritoComponent implements OnInit {

  formularioCrearFavorito:FormGroup|any; 
  constructor(private http:HttpClient)  {
    this.formularioCrearFavorito = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      Imagen:new FormControl('',Validators.required),
      Clasificacion: new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required),
    });
   }
   onSubmit(){
    var titulo=this.formularioCrearFavorito.controls.Titulo.value
    var Imagen=this.formularioCrearFavorito.controls.Imagen.value
    var Clasificacion=this.formularioCrearFavorito.controls.Clasificacion.value
    var Descripcion=this.formularioCrearFavorito.controls.Descripcion.value
    var selectBox:any=document.getElementById("selectBar");
    let selectedOption = selectBox.options[selectBox.selectedIndex];
    var favoritoSeleccionado=selectedOption.value;

    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.create_Favorito(titulo,Imagen,Clasificacion,Descripcion,favoritoSeleccionado)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  ngOnInit(): void {
  }

}
