import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MisCancionesDAO} from '../../../../_services/MisCancionesServices/MisCancionesDAO'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ver-canciones',
  templateUrl: './ver-canciones.component.html',
  styleUrls: ['./ver-canciones.component.scss']
})
export class VerCancionesComponent implements OnInit,AfterViewInit {
  formularioCrearCancion:FormGroup|any; 
  cancionActual:any;
  listaDeCanciones:any
  constructor(private http:HttpClient) {
    this.formularioCrearCancion = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      Genero:new FormControl('',Validators.required),
      Artista: new FormControl('',Validators.required),
      Fecha:new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required),
      Imagen:new FormControl('',Validators.required)
    });
  }
 
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    var cancionesDao=new MisCancionesDAO(this.http);
    cancionesDao.listarCanciones()
    .then((respuesta:any) => {
      console.log(respuesta.canciones);
      this.listaDeCanciones=respuesta.canciones;
    }).catch((err:any) => {
      alert(err);
    });
  }

  visualizarCancion(cancionSeleccionada:any){
    this.cancionActual=cancionSeleccionada;
    this.formularioCrearCancion.controls['Titulo'].setValue(this.cancionActual.titulo);
    this.formularioCrearCancion.controls['Artista'].setValue(this.cancionActual.artista);
    this.formularioCrearCancion.controls['Fecha'].setValue(this.cancionActual.fecha);
    this.formularioCrearCancion.controls['Genero'].setValue(this.cancionActual.genero);
    this.formularioCrearCancion.controls['Descripcion'].setValue(this.cancionActual.descripcion);
    this.formularioCrearCancion.controls['Imagen'].setValue(this.cancionActual.imagen);
  }
  editarCancion(){

  }
  GuardarCambiosCancion(){
    var id=this.cancionActual._id;
    var titulo=this.formularioCrearCancion.controls.Titulo.value;
    var artista=this.formularioCrearCancion.controls.Artista.value;
    var fecha=this.formularioCrearCancion.controls.Fecha.value;
    var genero=this.formularioCrearCancion.controls.Genero.value;
    var descripcion=this.formularioCrearCancion.controls.Descripcion.value;
    var imagen=this.formularioCrearCancion.controls.Imagen.value;
    var cancionesDao=new MisCancionesDAO(this.http);
    cancionesDao.update_Cancion(id,titulo,artista,fecha,genero,descripcion,"imagen")
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  eliminarCancion(){
    var cancionesDao=new MisCancionesDAO(this.http);
    cancionesDao.delete_Cancion(this.cancionActual._id)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  
}
