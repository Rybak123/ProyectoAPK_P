import { AlertService } from '../../../../../_services/alert.service';
import { UserService } from '../../../../../_services/paciente.service';
import { Component, OnInit,Output,EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { MisMetasDAO } from '../../../../../_services/paciente_services/agenda_services/MisMetasServices/MisMetasDAO';


@Component({
  selector: 'app-crear-metas-personales',
  templateUrl: './crear-metas-personales.component.html',
  styleUrls: ['./crear-metas-personales.component.scss']
})
export class CrearMetasPersonalesComponent implements OnInit,AfterViewInit {
  estadoCampo="";
  estadoCampo2="";
  estadoCampo3="";
  estadoCampo4="";
  estadoCampo5="";
  estadoCampo6="";
  estadoCampo7="";
  estadoCampo8="";
  estadoCampo9="";
  miformularioMetasPersonales:FormGroup|any; 
  public archivos: any=[];
  listaDeMetasPersonaless:any;
  constructor(private http:HttpClient) {
      this.miformularioMetasPersonales = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      FechaInicio:new FormControl('',Validators.required),
      FechaFin:new FormControl('',Validators.required),
      Prioridad:new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required)
    });
  }
  ngAfterViewInit(): void {
    var tituloHTML:any = document.getElementById('titulo1');
    var fechaFinHTML:any = document.getElementById('fechaFin1');
    var prioridadHTML:any = document.getElementById('prioridad1');
    var descripcionHTML:any = document.getElementById('descripcion1');

      tituloHTML.addEventListener('keyup', () => {
        if(tituloHTML.value.length>=1){
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
      fechaFinHTML.addEventListener('keyup', () => {
        if(fechaFinHTML.value.length>=1){
          fechaFinHTML.nextElementSibling.classList.add('fijar');
          var mensaje:any = document.getElementById('mensaje2');
          mensaje.style.color='green';
          this.estadoCampo2="";
        }
        else{
          fechaFinHTML.nextElementSibling.classList.remove('fijar');
         
          var mensaje:any = document.getElementById('mensaje2');
          mensaje.style.color='red';
          this.estadoCampo2="Campo obligatorio";
        }
      });
      prioridadHTML.addEventListener('keyup', () => {
        if(prioridadHTML.value.length>=1){
          prioridadHTML.nextElementSibling.classList.add('fijar');
          var mensaje:any = document.getElementById('mensaje3');
          mensaje.style.color='green';
          this.estadoCampo3="";
        }
        else{
          prioridadHTML.nextElementSibling.classList.remove('fijar');
          var mensaje:any = document.getElementById('mensaje3');
          mensaje.style.color='red';
          this.estadoCampo3="Campo obligatorio";
        }
      });
      descripcionHTML.addEventListener('keyup', () => {
        if(descripcionHTML.value.length>=1){
          descripcionHTML.nextElementSibling.classList.add('fijar');
          var mensaje:any = document.getElementById('mensaje4');
          mensaje.style.color='green';
          this.estadoCampo4="";
        }
        else{
          descripcionHTML.nextElementSibling.classList.remove('fijar');
          var mensaje:any = document.getElementById('mensaje4');
          mensaje.style.color='red';
          this.estadoCampo4="Campo obligatorio";
        }
      });
  }
  onSubmit(){
    if(this.validarCampos()){
      var titulo=this.miformularioMetasPersonales.controls.Titulo.value
      var fechaInicial=this.miformularioMetasPersonales.controls.FechaInicio.value
      var fechaFin=this.miformularioMetasPersonales.controls.FechaFin.value
      var prioridad=this.miformularioMetasPersonales.controls.Prioridad.value
      var descripcion=this.miformularioMetasPersonales.controls.Descripcion.value
    
      var metassDao=new MisMetasDAO(this.http);
      metassDao.create_Meta(titulo,fechaInicial,fechaFin,prioridad,descripcion)
      .then((respuesta:any) => {
        alert("Meta creada con exito");
        this.irAVerMetasPersonales();
      }).catch((err:any) => {
        alert(err);
      });
    }
    
  }

  ngOnInit(): void {

    

      var petasPersonalesDao=new MisMetasDAO(this.http);
      petasPersonalesDao.listarMetas()
      .then((respuesta:any) => {
        console.log(respuesta);
        this.listaDeMetasPersonaless=respuesta;
      }).catch((err:any) => {
        alert(err);
      });


  }
  @Output() irAVerMetasPersonalesEventEmiter= new EventEmitter();
  irAVerMetasPersonales(){
    this.irAVerMetasPersonalesEventEmiter.emit();
  }
  validarCampos(){

    var formularioValido=true;
    var tituloHTML:any = document.getElementById('titulo1');
    var fechaFinHTML:any = document.getElementById('fechaFin1');
    var prioridadHTML:any = document.getElementById('prioridad1');
    var descripcionHTML:any = document.getElementById('descripcion1');

    var libroYaRegistrado=false;
    this.listaDeMetasPersonaless.forEach((elements:any) => {
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
  
 
    if(!(tituloHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje');
      mensaje.style.color='red';
      this.estadoCampo="Campo obligatorio";
    }
    if(!(fechaFinHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje2');
      mensaje.style.color='red';
      this.estadoCampo2="Campo obligatorio";
    }
    if(!(prioridadHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje3');
      mensaje.style.color='red';
      this.estadoCampo3="Campo obligatorio";
    }
    if(!(descripcionHTML.value.length>=1)){
      formularioValido=false;
      var mensaje:any = document.getElementById('mensaje4');
      mensaje.style.color='red';
      this.estadoCampo4="Campo obligatorio";
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
