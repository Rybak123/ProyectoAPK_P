import { Component, OnInit,Output,EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { MisCancionesDAO } from '../../../../../../_services/paciente_services/agenda_services/MisCancionesServices/MisCancionesDAO';

@Component({
  selector: 'app-crear-canciones',
  templateUrl: './crear-canciones.component.html',
  styleUrls: ['./crear-canciones.component.scss']
})
export class CrearCancionesComponent implements OnInit,AfterViewInit {
  formularioCrearCancion:FormGroup|any; 
  urlImage:any;
  archivoActual:any;
  public archivos: any=[];
  listaDeLibros:any;
  estadoCampo="";
  estadoCampo2="";
  estadoCampo3="";
  estadoCampo4="";
  estadoCampo5="";
  estadoCampo6="";
  estadoCampo7="";
  estadoCampo8="";
  estadoCampo9="";

  constructor(private http:HttpClient)  {
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
    var tituloHTML:any = document.getElementById('titulo1');
    var generoHTML:any = document.getElementById('Genero1');
    var artistaHTML:any = document.getElementById('Artista1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');



    tituloHTML.addEventListener('keyup', () => {
      if(tituloHTML.value.length>=1){
        console.log(tituloHTML.value)
        tituloHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje');
        mensaje.style.color='green';
        this.estadoCampo="";
      }
      else{
        tituloHTML.nextElementSibling.classList.remove('fijar');
       
        var mensaje:any = document.getElementById('mensaje');
        mensaje.style.color='red';
        this.estadoCampo="Campo obligatorio";
      }
    });
    generoHTML.addEventListener('keyup', () => {
      if(generoHTML.value.length>=1){
        generoHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje2');
        mensaje.style.color='green';
        this.estadoCampo2="";
      }
      else{
        generoHTML.nextElementSibling.classList.remove('fijar');
       
        var mensaje:any = document.getElementById('mensaje2');
        mensaje.style.color='red';
        this.estadoCampo2="Campo obligatorio";
      }
    });
    artistaHTML.addEventListener('keyup', () => {
      if(artistaHTML.value.length>=1){
        console.log(tituloHTML.value)
        artistaHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje3');
        mensaje.style.color='green';
        this.estadoCampo3="";
      }
      else{
        artistaHTML.nextElementSibling.classList.remove('fijar');
       
        var mensaje:any = document.getElementById('mensaje3');
        mensaje.style.color='red';
        this.estadoCampo3="Campo obligatorio";
      }
    });
    fechaHTML.addEventListener('keyup', () => {
      if(fechaHTML.value.length>=1){
        console.log(tituloHTML.value)
        fechaHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje4');
        mensaje.style.color='green';
        this.estadoCampo4="";
      }
      else{
        fechaHTML.nextElementSibling.classList.remove('fijar');
       
        var mensaje:any = document.getElementById('mensaje4');
        mensaje.style.color='red';
        this.estadoCampo4="Campo obligatorio";
      }
    });
    descripcionHTML.addEventListener('keyup', () => {
      if(descripcionHTML.value.length>=1){
        descripcionHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje5');
        mensaje.style.color='green';
        this.estadoCampo5="";
      }
      else{
        descripcionHTML.nextElementSibling.classList.remove('fijar');
       
        var mensaje:any = document.getElementById('mensaje5');
        mensaje.style.color='red';
        this.estadoCampo5="Campo obligatorio";
      }
    });
    
  }

  ngOnInit(): void {
  
    var cancionesDao=new MisCancionesDAO(this.http);
    cancionesDao.listarCanciones()
    .then((respuesta:any) => {
      this.listaDeLibros=respuesta.canciones;
    }).catch((err:any) => {
      alert(err);
    });
     
  }

  onSubmit(){
  
    if(this.validarCampos()){
      
      var cancionesDao=new MisCancionesDAO(this.http);
      cancionesDao.listarCanciones()
      .then((respuesta:any) => {
        this.listaDeLibros=respuesta.canciones;
        
      
      }).catch((err:any) => {
        alert(err);
      });
      var titulo=this.formularioCrearCancion.controls.Titulo.value
      var artista=this.formularioCrearCancion.controls.Artista.value
      var fecha=this.formularioCrearCancion.controls.Fecha.value
      var genero=this.formularioCrearCancion.controls.Genero.value
      var descripcion=this.formularioCrearCancion.controls.Descripcion.value
      var imagen=this.formularioCrearCancion.controls.Imagen.value
      
  
      var formularioImagen=new FormData();
      formularioImagen.append('myFile', this.archivoActual, this.archivoActual.name);
      var cancionesDao=new MisCancionesDAO(this.http);
      cancionesDao.create_Cancion(titulo,genero,artista,fecha,descripcion,imagen)
      .then((respuesta:any) => {
        console.log(respuesta);
        var nuevaListDeLibros:any=respuesta.agendaVirtual.misCanciones;
        var libroDiferenciaNuevo=nuevaListDeLibros.filter(this.comparer(this.listaDeLibros));
        console.log(libroDiferenciaNuevo[0])
        cancionesDao.create_cancionMandarImagen(libroDiferenciaNuevo[0]._id,formularioImagen);
        alert("Cancion registrada con exito");
        this.irAVerCanciones();
      }).catch((err:any) => {
        alert(err);
      });
    }
  }
  capturarFile(event:any){
    var mensaje:any = document.getElementById('mensaje6');
    mensaje.style.color='green';
    this.estadoCampo6="";

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
  comparer(otherArray:any){
    return function(current:any){
      return otherArray.filter(function(other:any){
        return other._id == current._id
      }).length == 0;
    }
  }

  @Output() irAVerCancionesEventEmiter= new EventEmitter();
  irAVerCanciones(){
    this.irAVerCancionesEventEmiter.emit();
  }
  verCalendario(){
    var mensaje:any = document.getElementById('mensaje4');
        mensaje.style.color='green';
        this.estadoCampo9="";
  }

  validarCampos(){

    var formularioValido=true;
    var tituloHTML:any = document.getElementById('titulo1');
    var generoHTML:any = document.getElementById('Genero1');
    var artistaHTML:any = document.getElementById('Artista1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');
    console.log(this.listaDeLibros)
    var libroYaRegistrado=false;
    this.listaDeLibros.forEach((elements:any) => {
      if(elements.titulo==tituloHTML.value){
        libroYaRegistrado=true;
        return;
      }
    });

    if(libroYaRegistrado){
      alert("El titulo ya se encuentra registrado");
      formularioValido=false;
      return;
    }


    if(!(this.archivos.length>0)){
      var mensaje:any = document.getElementById('mensaje6');
        mensaje.style.color='red';
        this.estadoCampo6="Campo obligatorio";
        formularioValido=false;
    }
  
 
    if(!(tituloHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje');
      mensaje.style.color='red';
      this.estadoCampo="Campo obligatorio";
    }
    if(!(generoHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje2');
      mensaje.style.color='red';
      this.estadoCampo2="Campo obligatorio";
    }
    if(!(artistaHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje3');
      mensaje.style.color='red';
      this.estadoCampo3="Campo obligatorio";
    }
    if(!(fechaHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje4');
      mensaje.style.color='red';
      this.estadoCampo4="Campo obligatorio";
    }
    if(!(descripcionHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje5');
      mensaje.style.color='red';
      this.estadoCampo5="Campo obligatorio";
    }
    if(formularioValido)
    {
      return true;
    }
    else{
      return false;
    }
  }
}
