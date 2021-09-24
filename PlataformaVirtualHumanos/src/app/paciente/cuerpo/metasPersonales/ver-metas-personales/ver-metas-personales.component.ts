import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MisMetasDAO} from '../../../../_services/MisMetasServices/MisMetasDAO'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-ver-metas-personales',
  templateUrl: './ver-metas-personales.component.html',
  styleUrls: ['./ver-metas-personales.component.scss']
})
export class VerMetasPersonalesComponent implements OnInit {
  miformularioMetasPersonales:FormGroup|any; 
  MetaPersonalActual:any;
  listaDeMetasPersonales:any
  constructor(private http:HttpClient) {
    this.miformularioMetasPersonales = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      FechaInicio:new FormControl('',Validators.required),
      FechaFin:new FormControl('',Validators.required),
      Prioridad:new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
    var metasPersonalesDao=new MisMetasDAO(this.http);
    metasPersonalesDao.listarMetas()
    .then((respuesta:any) => {
      console.log(respuesta);
      this.listaDeMetasPersonales=respuesta;
    }).catch((err:any) => {
      alert(err);
    });
  }
  visualizarMetaPersonal(cancionSeleccionada:any){
    this.MetaPersonalActual=cancionSeleccionada;
    this.miformularioMetasPersonales.controls['Titulo'].setValue(this.MetaPersonalActual.titulo);
    this.miformularioMetasPersonales.controls['FechaInicio'].setValue(this.MetaPersonalActual.fechaDeRegistro);
    this.miformularioMetasPersonales.controls['FechaFin'].setValue(this.MetaPersonalActual.fechaDeLaMeta);
    this.miformularioMetasPersonales.controls['Prioridad'].setValue(this.MetaPersonalActual.prioridad);
    this.miformularioMetasPersonales.controls['Descripcion'].setValue(this.MetaPersonalActual.descripcion);
  }
  editarMetaPersonal(){

  }
  GuardarCambiosMetaPersonal(){
    var id=this.MetaPersonalActual._id;
    var titulo=this.miformularioMetasPersonales.controls.Titulo.value;
    var fechaInicio=this.miformularioMetasPersonales.controls.FechaInicio.value;
    var fechaFin=this.miformularioMetasPersonales.controls.FechaFin.value;
    var prioridad=this.miformularioMetasPersonales.controls.Prioridad.value;
    var descripcion=this.miformularioMetasPersonales.controls.Descripcion.value;

    var metasDao=new MisMetasDAO(this.http);
    metasDao.update_Meta(id,titulo,fechaInicio,fechaFin,prioridad,descripcion)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  eliminarMetaPersonal(){
    var metasPersonalesDao=new MisMetasDAO(this.http);
    metasPersonalesDao.delete_Meta(this.MetaPersonalActual._id)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }

}
