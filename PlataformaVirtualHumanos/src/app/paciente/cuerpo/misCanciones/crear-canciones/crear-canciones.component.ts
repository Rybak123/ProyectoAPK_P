import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {MisCancionesDAO} from '../../../../_services/MisCancionesServices/MisCancionesDAO'
@Component({
  selector: 'app-crear-canciones',
  templateUrl: './crear-canciones.component.html',
  styleUrls: ['./crear-canciones.component.scss']
})
export class CrearCancionesComponent implements OnInit {
  formularioCrearCancion:FormGroup|any; 
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

  ngOnInit(): void {
  }

  onSubmit(){
    var titulo=this.formularioCrearCancion.controls.Titulo.value
    var artista=this.formularioCrearCancion.controls.Artista.value
    var fecha=this.formularioCrearCancion.controls.Fecha.value
    var genero=this.formularioCrearCancion.controls.Genero.value
    var descripcion=this.formularioCrearCancion.controls.Descripcion.value
    var imagen=this.formularioCrearCancion.controls.Imagen.value
    
    var cancionesDao=new MisCancionesDAO(this.http);
    cancionesDao.create_Cancion(titulo,genero,artista,fecha,descripcion,imagen)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
}
