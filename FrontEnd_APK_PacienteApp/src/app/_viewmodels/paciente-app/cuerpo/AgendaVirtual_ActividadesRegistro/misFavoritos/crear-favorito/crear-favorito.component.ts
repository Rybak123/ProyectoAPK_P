import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { MisFavoritosDAO } from '../../../../../../_services/paciente_services/agenda_services/MisFavoritosServices/MisFavoritosDAO';


@Component({
  selector: 'app-crear-favorito',
  templateUrl: './crear-favorito.component.html',
  styleUrls: ['./crear-favorito.component.scss']
})
export class CrearFavoritoComponent implements OnInit {

  formularioCrearFavorito:FormGroup|any; 
  urlImage:any;
  archivoActual:any;
  public archivos: any;
  listaDeLibros:any;
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
    var favoritosDao=new MisFavoritosDAO(this.http);
    favoritosDao.listarFavoritos(favoritoSeleccionado)
    .then((respuesta:any) => {
      this.listaDeLibros=respuesta;
    }).catch((err:any) => {
      alert(err);
    });

     var formularioImagen=new FormData();
    formularioImagen.append('myFile', this.archivoActual, this.archivoActual.name);

    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.create_Favorito(titulo,Imagen,Clasificacion,Descripcion,favoritoSeleccionado)
    .then((respuesta:any) => {
      console.log(respuesta)
      switch(favoritoSeleccionado){
        case "cancion":
          var nuevaListDeLibros:any=respuesta.agendaVirtual.misFavoritos.canciones;
        break;
        case "pelicula":
          var nuevaListDeLibros:any=respuesta.agendaVirtual.misFavoritos.peliculas;
        break;
        case "momento":
          var nuevaListDeLibros:any=respuesta.agendaVirtual.misFavoritos.momentos;
        break;
        case "lugar":
          var nuevaListDeLibros:any=respuesta.agendaVirtual.misFavoritos.lugares;
        break;
      }
      
      var libroDiferenciaNuevo=nuevaListDeLibros.filter(this.comparer(this.listaDeLibros));
      misFavoritosDAO.create_favoritoMandarImagen(libroDiferenciaNuevo[0]._id,formularioImagen,favoritoSeleccionado)
    }).catch((err:any) => {
      alert(err);
    });
  }
  ngOnInit(): void {
  }
  comparer(otherArray:any){
    return function(current:any){
      return otherArray.filter(function(other:any){
        return other._id == current._id
      }).length == 0;
    }
  }
  capturarFile(event:any){
    this.archivoActual=<File>event.target.files[0];
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        alert("Only images are supported.");
        return;
    }

    const reader = new FileReader();
    this.archivos = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      var imagenNuevoLibro:any=document.getElementById("imagenNuevoLibro");
      imagenNuevoLibro.style.display="block";
      imagenNuevoLibro.src=reader.result;
    }
  }
}
