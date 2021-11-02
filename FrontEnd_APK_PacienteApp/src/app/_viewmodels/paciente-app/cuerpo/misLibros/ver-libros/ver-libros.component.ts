import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MisLibrosDAO } from '../../../../../_services/paciente_services/agenda_services/MisLibrosServices/MisLibrosDAO';
import { NavigationService } from '../../../../../_services/paciente_services/navigation_services/navigationService';


@Component({
  selector: 'app-ver-libros',
  templateUrl: './ver-libros.component.html',
  styleUrls: ['./ver-libros.component.scss']
})
export class VerLibrosComponent implements OnInit,AfterViewInit {
  formularioCrearLibro:FormGroup|any; 
  libroActual:any;
  listaDeLibros:any;
  direccionLibroActual:any;
  public archivos: any=[];
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

 


  constructor(private http:HttpClient,private navigationService:NavigationService){
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

  cancelar(){
    this.visualizarLibro(this.libroActual);
      this.formularioCrearLibro.controls['Tituloo'].disable();
    this.formularioCrearLibro.controls['Autorr'].disable();
    this.formularioCrearLibro.controls['Fechaa'].disable();
    this.formularioCrearLibro.controls['Generoo'].disable();
    this.formularioCrearLibro.controls['Descripcionn'].disable();
    this.formularioCrearLibro.controls['Imagenn'].disable();
    this.formularioCrearLibro.controls['ControlDePAginass'].disable();
    this.formularioCrearLibro.controls['Editoriall'].disable();
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


    this.formularioCrearLibro.controls['Tituloo'].disable();
    this.formularioCrearLibro.controls['Autorr'].disable();
    this.formularioCrearLibro.controls['Fechaa'].disable();
    this.formularioCrearLibro.controls['Generoo'].disable();
    this.formularioCrearLibro.controls['Descripcionn'].disable();
    this.formularioCrearLibro.controls['Imagenn'].disable();
    this.formularioCrearLibro.controls['ControlDePAginass'].disable();
    this.formularioCrearLibro.controls['Editoriall'].disable();
  }
  visualizarLibro(libroSeleccionado:any){
    this.libroActual=libroSeleccionado;
    var fechLibro = new Date(this.libroActual.fecha);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;

   
    this.formularioCrearLibro.controls['Tituloo'].setValue(this.libroActual.titulo);
    this.formularioCrearLibro.controls['Autorr'].setValue(this.libroActual.autor);
    this.formularioCrearLibro.controls['Fechaa'].setValue(fechaActualString);
    this.formularioCrearLibro.controls['Generoo'].setValue(this.libroActual.genero);
    this.formularioCrearLibro.controls['Descripcionn'].setValue(this.libroActual.descripcion);
    this.formularioCrearLibro.controls['Imagenn'].setValue(this.libroActual.imagen);
    this.formularioCrearLibro.controls['ControlDePAginass'].setValue(this.libroActual.cantidadPaginas);
    this.formularioCrearLibro.controls['Editoriall'].setValue(this.libroActual.editorial);
    console.log(this.libroActual.imagenPortada);
    this.direccionLibroActual=this.libroActual.imagenPortada;
    //imagenLibro.src=;

    }
  editarLibro(){

    this.formularioCrearLibro.controls['Autorr'].enable();
    this.formularioCrearLibro.controls['Fechaa'].enable();
    this.formularioCrearLibro.controls['Generoo'].enable();
    this.formularioCrearLibro.controls['Descripcionn'].enable();
    this.formularioCrearLibro.controls['Imagenn'].enable();
    this.formularioCrearLibro.controls['ControlDePAginass'].enable();
    this.formularioCrearLibro.controls['Editoriall'].enable();



  }
  registrarNuevoLibro(){
    this.navigationService.iraCrearLibro();
  }
  GuardarCambiosLibro(){
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.listarLibros()
    .then((respuesta:any) => {
      this.listaDeLibros=respuesta.libros;
    }).catch((err:any) => {
      alert(err);
    });

    this.validarCampos();

    var id=this.libroActual._id;
    var titulo=this.formularioCrearLibro.controls.Tituloo.value;
    var autor=this.formularioCrearLibro.controls.Autorr.value;
    var fecha=this.formularioCrearLibro.controls.Fechaa.value;
    var today = new Date(fecha);
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    var genero=this.formularioCrearLibro.controls.Generoo.value;
    var descripcion=this.formularioCrearLibro.controls.Descripcionn.value;
    var imagen=this.formularioCrearLibro.controls.Imagenn.value;
    var cantidadDePaginas=this.formularioCrearLibro.controls.ControlDePAginass.value;
    var editorial=this.formularioCrearLibro.controls.Editoriall.value;
    var librosDao=new MisLibrosDAO(this.http);
    librosDao.update_Libro(id,titulo,autor,editorial,cantidadDePaginas,tomorrow,genero,descripcion,this.direccionLibroActual)
    .then((respuesta:any) => {
      console.log(this.listaDeLibros);
       this.formularioCrearLibro.controls['Tituloo'].disable();
        this.formularioCrearLibro.controls['Autorr'].disable();
        this.formularioCrearLibro.controls['Fechaa'].disable();
        this.formularioCrearLibro.controls['Generoo'].disable();
        this.formularioCrearLibro.controls['Descripcionn'].disable();
        this.formularioCrearLibro.controls['Imagenn'].disable();
        this.formularioCrearLibro.controls['ControlDePAginass'].disable();
        this.formularioCrearLibro.controls['Editoriall'].disable();

        var librosDao=new MisLibrosDAO(this.http);
        librosDao.listarLibros()
        .then((respuesta:any) => {
          this.listaDeLibros=respuesta.libros;

          this.estadoCampo="";
          this.estadoCampo2="";
          this.estadoCampo3="";
          this.estadoCampo4="";
          this.estadoCampo5="";
          this.estadoCampo6="";
          this.estadoCampo7="";
          this.estadoCampo8="";
          this.estadoCampo9="";

        }).catch((err:any) => {
          alert(err);
        });


    }).catch((err:any) => {
      alert(err);
    });
  }
  eliminarLibro(){
    var r=confirm("¿Desea eliminar este registro?");
    if (r==true)
      {
        var librosDao=new MisLibrosDAO(this.http);
        librosDao.delete_Libro(this.libroActual._id)
        .then((respuesta:any) => {
          console.log(respuesta);

          var librosDao=new MisLibrosDAO(this.http);
          librosDao.listarLibros()
          .then((respuesta:any) => {
            this.listaDeLibros=respuesta.libros;
            this.formularioCrearLibro.reset();
            this.direccionLibroActual="";
          }).catch((err:any) => {
            alert(err);
          });

        }).catch((err:any) => {
          alert(err);
        });

       
      }
    else
      {
     
      }
    
  }
  @Output() irACrearLibroEmiter= new EventEmitter();
  irACrearLibro(){
    this.irACrearLibroEmiter.emit();
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
  validarCampos(){

    var formularioValido=false;
    var tituloHTML:any = document.getElementById('titulo1');
    var editorialHTML:any = document.getElementById('Editorial1');
    var cantidadDePaginasHTML:any = document.getElementById('ControlDePaginas1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');

    var libroYaRegistrado=false;
    
    if(libroYaRegistrado){
      alert("El titulo ya se encuentra registrado");
      formularioValido=false;
      return;
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
}
