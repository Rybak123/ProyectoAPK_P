import { AlertService } from './../../../../_services/alert.service';
import { UserService } from './../../../../_services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {MisLibrosDAO} from '../../../../_services/MisLibrosServices/MisLibrosDAO'
@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
  formularioCrearLibro:FormGroup|any; 
  urlImage:any;
  archivoActual:any;
  public archivos: any;
  constructor(private http:HttpClient) {
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
  onSubmit(){
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
    formularioImagen.append('file', this.archivoActual, this.archivoActual.name);

    var librosDao=new MisLibrosDAO(this.http);
    librosDao.create_Libro(titulo,autor,editorial,controlDePaginas,fecha,genero,descripcion,"")
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }

  ngOnInit(): void {
   
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
      imagenNuevoLibro.src=reader.result;
    }
    //console.log(event.target.files);
  }
 
}
