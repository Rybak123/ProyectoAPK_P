import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MisCancionesDAO} from '../../../../_services/MisCancionesServices/MisCancionesDAO'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-canciones',
  templateUrl: './ver-canciones.component.html',
  styleUrls: ['./ver-canciones.component.scss']
})
export class VerCancionesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    var cancionesDao=new MisCancionesDAO(this.http);
    cancionesDao.listarCanciones()
    .then((respuesta:any) => {
      console.log(respuesta.canciones);
      this.crearTargetasCanciones(respuesta.canciones);
    }).catch((err:any) => {
      alert(err);
    });
  }

  onSubmit(){
  }
  
  crearTargetasCanciones(listaDeCanciones:any){
    var contenedor:any=document.getElementById("contenedorTarjetasCanciones");
    console.log(listaDeCanciones.length);
    for(var i=0;i<listaDeCanciones.length;i++){
      
      var targetaCancion=
      `
      <div id="formCancion_${i}"><br/>
      <h3>cancion ${i}</h3>
        Titulo:<input type="text" value="${listaDeCanciones[i].titulo}" id="titulo_${i}" ><br/>
        Genero:<input type="text" value="${listaDeCanciones[i].genero}"  id="genero_${i}"><br/>
        Artista:<input type="text" value="${listaDeCanciones[i].artista}" id="artista_${i}"><br/>
        Fecha:<input type="date" value="${listaDeCanciones[i].fecha}" id="fecha_${i}"><br/>
        Descripcion:<input type="text" value="${listaDeCanciones[i].descripcion}" id="descripcion_${i}"><br/>

        <button class="btn btn-primary" id="guardar_${i}" (click)="guardarCancion(formCancion_${i})">Guardar</button>
        <button class="btn btn-primary" id="editar_${i}" (click)="editarcancion(formCancion_${i})">Editar</button>
        <button class="btn btn-primary" id="eliminar_${i}" onclick="eliminarCancion('this,e')">Eliminar</button>
      </div>
      `
      contenedor.innerHTML+=targetaCancion;
      
    }
  }
  eliminarCancion(ev:any,e:any){
    console.log(ev);
    console.log(e);
  }



}
