import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MisLibrosDAO } from 'src/app/_services/MisLibrosServices/MisLibrosDAO';

@Component({
  selector: 'app-ver-libros',
  templateUrl: './ver-libros.component.html',
  styleUrls: ['./ver-libros.component.scss']
})
export class VerLibrosComponent implements OnInit,AfterViewInit {
  formularioCrearLibro:FormGroup|any; 
  libroActual:any;
  listaDeLibros:any
  constructor(private http:HttpClient){
    this.formularioCrearLibro = new FormGroup({
      Tituloo:new FormControl('',Validators.required),
      Autorr:new FormControl('',Validators.required),
      Editoriall: new FormControl('',Validators.required),
      ControlDePAginass:new FormControl('',Validators.required),
      Fechaa:new FormControl('',Validators.required),
      Generoo:new FormControl('',Validators.required),
      Descripcionn:new FormControl('',Validators.required),
      Imagenn:new FormControl('',Validators.required)
      });
   }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.listarLibros()
    .then((respuesta:any) => {
      console.log(respuesta.canciones);
      this.listaDeLibros=respuesta.libros;
    }).catch((err:any) => {
      alert(err);
    });
  }
  visualizarLibro(libroSeleccionado:any){
    this.libroActual=libroSeleccionado;
    this.formularioCrearLibro.controls['Tituloo'].setValue(this.libroActual.titulo);
    this.formularioCrearLibro.controls['Autorr'].setValue(this.libroActual.autor);
    this.formularioCrearLibro.controls['Fechaa'].setValue(this.libroActual.fecha);
    this.formularioCrearLibro.controls['Generoo'].setValue(this.libroActual.genero);
    this.formularioCrearLibro.controls['Descripcionn'].setValue(this.libroActual.descripcion);
    this.formularioCrearLibro.controls['Imagenn'].setValue(this.libroActual.imagen);
    this.formularioCrearLibro.controls['ControlDePAginass'].setValue(this.libroActual.cantidadPaginas);
    this.formularioCrearLibro.controls['Editoriall'].setValue(this.libroActual.editorial);
  }
  editarLibro(){

  }
  GuardarCambiosLibro(){
    var id=this.libroActual._id;
    var titulo=this.formularioCrearLibro.controls.Tituloo.value;
    var autor=this.formularioCrearLibro.controls.Autorr.value;
    var fecha=this.formularioCrearLibro.controls.Fechaa.value;
    var genero=this.formularioCrearLibro.controls.Generoo.value;
    var descripcion=this.formularioCrearLibro.controls.Descripcionn.value;
    var imagen=this.formularioCrearLibro.controls.Imagenn.value;
    var cantidadDePaginas=this.formularioCrearLibro.controls.ControlDePAginass.value;
    var editorial=this.formularioCrearLibro.controls.Editoriall.value;
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.update_Libro(id,titulo,autor,editorial,cantidadDePaginas,fecha,genero,descripcion,"imagen")
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  eliminarLibro(){
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.delete_Libro(this.libroActual._id)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }

}
