import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MisCancionesDAO} from '../../../../_services/MisCancionesServices/MisCancionesDAO'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MisFavoritosDAO } from 'src/app/_services/MisFavoritosServices/MisFavoritosDAO';

@Component({
  selector: 'app-ver-favoritos',
  templateUrl: './ver-favoritos.component.html',
  styleUrls: ['./ver-favoritos.component.scss']
})
export class VerFavoritosComponent implements OnInit {

  formularioCrearFavorito:FormGroup|any; 
  FavoritoActual:any;
  listaDeFavoritos:any;
  tipoDeFavoritoActual:any;

  constructor(private http:HttpClient) {
    this.formularioCrearFavorito = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      Imagen:new FormControl('',Validators.required),
      Clasificacion: new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
    
  }
  verFavoritos(tipoFavorito:any){
    this.tipoDeFavoritoActual=tipoFavorito;
    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.listarFavoritos(tipoFavorito)
    .then((respuesta:any) => {
      console.log(respuesta);
      this.listaDeFavoritos=respuesta;
    }).catch((err:any) => {
      alert(err);
    });

  }
  visualizarFavorito(favoritoSeleccionado:any){
    this.FavoritoActual=favoritoSeleccionado;
    this.formularioCrearFavorito.controls['Titulo'].setValue(this.FavoritoActual.titulo);
    this.formularioCrearFavorito.controls['Imagen'].setValue(this.FavoritoActual.imagen);
    this.formularioCrearFavorito.controls['Clasificacion'].setValue(this.FavoritoActual.clasificacion);
    this.formularioCrearFavorito.controls['Descripcion'].setValue(this.FavoritoActual.descripcion);
  }

  GuardarCambiosFavorito(){
    var id=this.FavoritoActual._id;
    var titulo=this.formularioCrearFavorito.controls.Titulo.value;
    var imagen=this.formularioCrearFavorito.controls.Imagen.value;
    var clasificacion=this.formularioCrearFavorito.controls.Clasificacion.value;
    var descripcion=this.formularioCrearFavorito.controls.Descripcion.value;
    
    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.update_Favorito(id,titulo,imagen,clasificacion,descripcion,this.tipoDeFavoritoActual)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  
  eliminarFavorito(){
    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.delete_Favorito(this.FavoritoActual._id,this.tipoDeFavoritoActual)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  editarFavorito(){

  }
}
