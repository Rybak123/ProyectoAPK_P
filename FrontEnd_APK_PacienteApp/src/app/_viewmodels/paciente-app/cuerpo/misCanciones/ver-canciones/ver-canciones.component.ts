import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MisCancionesDAO } from '../../../../../_services/paciente_services/agenda_services/MisCancionesServices/MisCancionesDAO';

@Component({
  selector: 'app-ver-canciones',
  templateUrl: './ver-canciones.component.html',
  styleUrls: ['./ver-canciones.component.scss']
})
export class VerCancionesComponent implements OnInit,AfterViewInit {
  formularioCrearCancion:FormGroup|any; 
  cancionActual:any;
  listaDeCanciones:any
  direccionLibroActual:any;
  public archivos: any=[];
  estadoCampo="";
  estadoCampo2="";
  estadoCampo3="";
  estadoCampo4="";
  estadoCampo5="";
  estadoCampo6="";
  estadoCampo7="";
  estadoCampo8="";
  estadoCampo9="";
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
      console.log(err);
    });
    
    this.formularioCrearCancion.controls['Titulo'].disable();
    this.formularioCrearCancion.controls['Artista'].disable();
    this.formularioCrearCancion.controls['Fecha'].disable();
    this.formularioCrearCancion.controls['Genero'].disable();
    this.formularioCrearCancion.controls['Descripcion'].disable();
    this.formularioCrearCancion.controls['Imagen'].disable();
  }

  visualizarCancion(cancionSeleccionada:any){
    
    this.cancionActual=cancionSeleccionada;
    var fechLibro = new Date(this.cancionActual.fecha);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;


    this.cancionActual=cancionSeleccionada;
    this.formularioCrearCancion.controls['Titulo'].setValue(this.cancionActual.titulo);
    this.formularioCrearCancion.controls['Artista'].setValue(this.cancionActual.artista);
    this.formularioCrearCancion.controls['Fecha'].setValue(fechaActualString);
    this.formularioCrearCancion.controls['Genero'].setValue(this.cancionActual.genero);
    this.formularioCrearCancion.controls['Descripcion'].setValue(this.cancionActual.descripcion);
    this.formularioCrearCancion.controls['Imagen'].setValue(this.cancionActual.imagen);
    this.direccionLibroActual=this.cancionActual.imagenPortada;
  }
  editarCancion(){

    this.formularioCrearCancion.controls['Artista'].enable();
    this.formularioCrearCancion.controls['Fecha'].enable();
    this.formularioCrearCancion.controls['Genero'].enable();
    this.formularioCrearCancion.controls['Descripcion'].enable();
    this.formularioCrearCancion.controls['Imagen'].enable();
  }
  
  GuardarCambiosCancion(){
    if(this.validarCampos()){
      console.log("entro");
      var id=this.cancionActual._id;
      var titulo=this.formularioCrearCancion.controls.Titulo.value;
      var artista=this.formularioCrearCancion.controls.Artista.value;
      var fecha=this.formularioCrearCancion.controls.Fecha.value;
      var genero=this.formularioCrearCancion.controls.Genero.value;
      var descripcion=this.formularioCrearCancion.controls.Descripcion.value;
      var imagen=this.formularioCrearCancion.controls.Imagen.value;
      var cancionesDao=new MisCancionesDAO(this.http);
      cancionesDao.update_Cancion(id,titulo,artista,fecha,genero,descripcion,this.direccionLibroActual)
      .then((respuesta:any) => {
        this.estadoCampo="";
        this.estadoCampo2="";
        this.estadoCampo3="";
        this.estadoCampo4="";
        this.estadoCampo5="";
        this.estadoCampo6="";
        this.estadoCampo7="";
        this.estadoCampo8="";
        this.estadoCampo9="";
        this.formularioCrearCancion.controls['Titulo'].disable();
        this.formularioCrearCancion.controls['Artista'].disable();
        this.formularioCrearCancion.controls['Fecha'].disable();
        this.formularioCrearCancion.controls['Genero'].disable();
        this.formularioCrearCancion.controls['Descripcion'].disable();
        this.formularioCrearCancion.controls['Imagen'].disable();
        var cancionesDao=new MisCancionesDAO(this.http);
        cancionesDao.listarCanciones()
        .then((respuesta:any) => {
          console.log(respuesta.canciones);
          this.listaDeCanciones=respuesta.canciones;
        }).catch((err:any) => {
          console.log(err);
        });

      }).catch((err:any) => {
        console.log(err);
      });
    }
   

    
  }
  eliminarCancion(){
    var r=confirm("¿Desea eliminar este registro?");
    if (r==true)
      {
        var cancionesDao=new MisCancionesDAO(this.http);
        cancionesDao.delete_Cancion(this.cancionActual._id)
        .then((respuesta:any) => {
          
          var cancionesDao=new MisCancionesDAO(this.http);
          cancionesDao.listarCanciones()
          .then((respuesta:any) => {
            console.log(respuesta.canciones);
            this.listaDeCanciones=respuesta.canciones;
            this.formularioCrearCancion.reset();
            this.direccionLibroActual="";
          }).catch((err:any) => {
            console.log(err);
          });

        }).catch((err:any) => {
          console.log(err);
        });
      }
    else
      {
     
      }
    
  }
 
  @Output() irACrearCancionesEventEmiter= new EventEmitter();
  irACrearCanciones(){
    this.irACrearCancionesEventEmiter.emit();
  }
  verCalendario(){
    var mensaje:any = document.getElementById('mensaje9');
        mensaje.style.color='green';
        this.estadoCampo9="";
  }
  cancelar(){
    this.visualizarCancion(this.cancionActual);
    this.formularioCrearCancion.controls['Titulo'].disable();
    this.formularioCrearCancion.controls['Artista'].disable();
    this.formularioCrearCancion.controls['Fecha'].disable();
    this.formularioCrearCancion.controls['Genero'].disable();
    this.formularioCrearCancion.controls['Descripcion'].disable();
    this.formularioCrearCancion.controls['Imagen'].disable();
  }
  editarLibro(){
    
  }
  validarCampos(){

    var formularioValido=true;

    var tituloHTML:any = document.getElementById('titulo1');
    var generoHTML:any = document.getElementById('Genero1');
    var artistaHTML:any = document.getElementById('Artista1');
    var fechaHTML:any = document.getElementById('Fechas1');
    var descripcionHTML:any = document.getElementById('Descripcion1');

    var libroYaRegistrado=false;


    if(libroYaRegistrado){
      alert("El titulo ya se encuentra registrado");
      formularioValido=false;
      return;
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
