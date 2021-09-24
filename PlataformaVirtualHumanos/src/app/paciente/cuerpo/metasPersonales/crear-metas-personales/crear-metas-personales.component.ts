import { AlertService } from './../../../../_services/alert.service';
import { UserService } from './../../../../_services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { MisMetasDAO } from 'src/app/_services/MisMetasServices/MisMetasDAO';

@Component({
  selector: 'app-crear-metas-personales',
  templateUrl: './crear-metas-personales.component.html',
  styleUrls: ['./crear-metas-personales.component.scss']
})
export class CrearMetasPersonalesComponent implements OnInit {
  miformularioMetasPersonales:FormGroup|any; 
  constructor(private http:HttpClient) {
      this.miformularioMetasPersonales = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      FechaInicio:new FormControl('',Validators.required),
      FechaFin:new FormControl('',Validators.required),
      Prioridad:new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required)
    });
  }
  onSubmit(){
    var titulo=this.miformularioMetasPersonales.controls.Titulo.value
    var fechaInicial=this.miformularioMetasPersonales.controls.FechaInicio.value
    var fechaFin=this.miformularioMetasPersonales.controls.FechaFin.value
    var prioridad=this.miformularioMetasPersonales.controls.Prioridad.value
    var descripcion=this.miformularioMetasPersonales.controls.Descripcion.value
  
    var metassDao=new MisMetasDAO(this.http);
    metassDao.create_Meta(titulo,fechaInicial,fechaFin,prioridad,descripcion)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }

  ngOnInit(): void {
  }

}
