import { AlertService } from '../../../../../_services/alert.service';
import { UserService } from '../../../../../_services/paciente.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

import { MatDatepicker } from '@angular/material/datepicker';
import { NavigationService } from '../../../../../_services/paciente_services/navigation_services/navigationService';
import { MisLibrosDAO } from '../../../../../_services/paciente_services/agenda_services/MisLibrosServices/MisLibrosDAO';
@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
  
  minDate: any;
  maxDate: any;
  dob: any
  estadoCampo="";
  estadoCampo2="";
  estadoCampo3="";
  estadoCampo4="";
  estadoCampo5="";
  estadoCampo6="";
  estadoCampo7="";
  estadoCampo8="";
  estadoCampo9="";


  
  formularioCrearLibro:FormGroup|any; 
  urlImage:any;
  archivoActual:any;
  public archivos: any=[];
  listaDeLibros:any;
  constructor(private http:HttpClient,private navigationServices:NavigationService) {
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
  validarCampos(){

    var formularioValido=false;
    var tituloHTML:any = document.getElementById('titulo1');
    var editorialHTML:any = document.getElementById('Editorial1');
    var cantidadDePaginasHTML:any = document.getElementById('ControlDePaginas1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');


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

    var generoHTML:any = document.getElementById('Genero1');
    let selectedOption = generoHTML.options[generoHTML.selectedIndex];
    if(!(this.archivos.length>0)){
      var mensaje:any = document.getElementById('mensaje8');
        mensaje.style.color='red';
        this.estadoCampo8="Campo obligatorio";
        formularioValido=false;
    }
    if(selectedOption==undefined){
      console.log("no definido")
      var mensaje:any = document.getElementById('mensaje6');
      mensaje.style.color='red';
      this.estadoCampo6="Campo obligatorio";
      formularioValido=false;
    }

    var tituloHTML:any = document.getElementById('titulo1');
    var autorHTML:any = document.getElementById('Autor1');
    var editorialHTML:any = document.getElementById('Editorial1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var cantidadDePaginasHTML:any = document.getElementById('ControlDePaginas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');

    if(!(tituloHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje');
      mensaje.style.color='red';
      this.estadoCampo="Campo obligatorio";
    }
    if(!(autorHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje2');
      mensaje.style.color='red';
      this.estadoCampo2="Campo obligatorio";
    }
    if(!(descripcionHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje7');
      mensaje.style.color='red';
      this.estadoCampo7="Campo obligatorio";
    }
    if(!(editorialHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje3');
      mensaje.style.color='red';
      this.estadoCampo3="Campo obligatorio";
    }
    if(!(cantidadDePaginasHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje4');
      mensaje.style.color='red';
      this.estadoCampo4="Campo obligatorio";
    }
    if(!(fechaHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje9');
      mensaje.style.color='red';
      this.estadoCampo9="Campo obligatorio";
    }
    if(formularioValido)
    {
      return true;
    }
    else{
      return false;
    }
  }

  onSubmit(){
    this.validarCampos();
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.listarLibros()
    .then((respuesta:any) => {
      this.listaDeLibros=respuesta.libros;
    }).catch((err:any) => {
      alert(err);
    });


    var titulo=this.formularioCrearLibro.controls.Tituloo.value
    var autor=this.formularioCrearLibro.controls.Autorr.value
    var editorial=this.formularioCrearLibro.controls.Editoriall.value
    var controlDePaginas=this.formularioCrearLibro.controls.ControlDePAginass.value
    var fecha=this.formularioCrearLibro.controls.Fechaa.value
    var genero=this.formularioCrearLibro.controls.Generoo.value
    var descripcion=this.formularioCrearLibro.controls.Descripcionn.value
    var imagen=this.formularioCrearLibro.controls.Imagenn.value
    
    //EnviarDatosLibro
    var formularioImagen=new FormData();
    formularioImagen.append('myFile', this.archivoActual, this.archivoActual.name);

    var librosDao=new MisLibrosDAO(this.http);
    librosDao.create_Libro(titulo,autor,editorial,controlDePaginas,fecha,genero,descripcion,"")
    .then((respuesta:any) => {
      var nuevaListDeLibros:any=respuesta.agendaVirtual.misLibros;
      var libroDiferenciaNuevo=nuevaListDeLibros.filter(this.comparer(this.listaDeLibros));
      librosDao.create_LibroMandarImagen(libroDiferenciaNuevo[0]._id,formularioImagen);
      alert("Libro registrado con exito");
      this.volver();
    }).catch((err:any) => {
      alert(err);
    });
  }
  comparer(otherArray:any){
    return function(current:any){
      return otherArray.filter(function(other:any){
        return other._id == current._id
      }).length == 0;
    }
  }

  ngOnInit(): void {
    const fechaHoy = new Date();
    this.minDate = fechaHoy;
    this.maxDate = fechaHoy;
 
    
    
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.listarLibros()
    .then((respuesta:any) => {
      this.listaDeLibros=respuesta.libros;
      var tituloHTML:any = document.getElementById('titulo1');
    var editorialHTML:any = document.getElementById('Editorial1');
    var cantidadDePaginasHTML:any = document.getElementById('ControlDePaginas1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');
    var autoHTML:any = document.getElementById('Autor1');
    var imagenHTML:any = document.getElementById('Imagen1');
    var generoHTML:any = document.getElementById('Genero1');

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
    autoHTML.addEventListener('keyup', () => {
      if(autoHTML.value.length>=1){
        autoHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje2');
        mensaje.style.color='green';
        this.estadoCampo2="";
      }
      else{
        autoHTML.nextElementSibling.classList.remove('fijar');
        var mensaje:any = document.getElementById('mensaje2');
        mensaje.style.color='red';
        this.estadoCampo2="Campo obligatorio";
      }
    });
    editorialHTML.addEventListener('keyup', () => {
      if(editorialHTML.value.length>=1){
        editorialHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje3');
        mensaje.style.color='green';
        this.estadoCampo3="";
      }
      else{
        editorialHTML.nextElementSibling.classList.remove('fijar');
        var mensaje:any = document.getElementById('mensaje3');
        mensaje.style.color='red';
        this.estadoCampo3="Campo obligatorio";
      }
    });
    cantidadDePaginasHTML.addEventListener('keyup', () => {
      if(cantidadDePaginasHTML.value.length>=1){
        cantidadDePaginasHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje4');
        mensaje.style.color='green';
        this.estadoCampo4="";
      }
      else{
        cantidadDePaginasHTML.nextElementSibling.classList.remove('fijar');
        var mensaje:any = document.getElementById('mensaje4');
        mensaje.style.color='red';
        this.estadoCampo4="Campo obligatorio";
      }
    });
    fechaHTML.addEventListener('keyup', () => {
      if(fechaHTML.value.length>=1){
        fechaHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje5');
        mensaje.style.color='green';
        this.estadoCampo5="";
      }
      else{
        fechaHTML.nextElementSibling.classList.remove('fijar');
        var mensaje:any = document.getElementById('mensaje5');
        mensaje.style.color='red';
        this.estadoCampo5="Campo obligatorio";
      }
    });
   
    descripcionHTML.addEventListener('keyup', () => {
      if(descripcionHTML.value.length>=1){
        descripcionHTML.nextElementSibling.classList.add('fijar');
        var mensaje:any = document.getElementById('mensaje7');
        mensaje.style.color='green';
        this.estadoCampo7="";
      }
      else{
        descripcionHTML.nextElementSibling.classList.remove('fijar');
        var mensaje:any = document.getElementById('mensaje7');
        mensaje.style.color='red';
        this.estadoCampo7="Campo obligatorio";
      }
    });
    }).catch((err:any) => {
      alert(err);
    });
  }
  capturarFile(event:any){
    var mensaje:any = document.getElementById('mensaje8');
    mensaje.style.color='green';
    this.estadoCampo8="";

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
  @Output() volverAVerLibroEmiter= new EventEmitter();
  volver(){
    this.volverAVerLibroEmiter.emit();
  }
  ver(){
    var generoHTML:any = document.getElementById('Genero1');
    generoHTML.nextElementSibling.classList.add('fijar');
    var mensaje:any = document.getElementById('mensaje6');
        mensaje.style.color='green';
        this.estadoCampo6="";
  }
  verCalendario(){
    var mensaje:any = document.getElementById('mensaje9');
        mensaje.style.color='green';
        this.estadoCampo9="";
  }


}
  


