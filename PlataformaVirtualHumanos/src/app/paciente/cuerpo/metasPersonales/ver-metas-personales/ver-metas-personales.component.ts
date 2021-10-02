import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
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

  
    this.miformularioMetasPersonales.controls['Titulo'].disable();
    this.miformularioMetasPersonales.controls['FechaInicio'].disable();
    this.miformularioMetasPersonales.controls['FechaFin'].disable();
    this.miformularioMetasPersonales.controls['Prioridad'].disable();
    this.miformularioMetasPersonales.controls['Descripcion'].disable();


  }
  visualizarMetaPersonal(cancionSeleccionada:any){
    this.MetaPersonalActual=cancionSeleccionada;
 
    var fechLibro = new Date(this.MetaPersonalActual.fechaDeLaMeta);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;

    this.miformularioMetasPersonales.controls['Titulo'].setValue(this.MetaPersonalActual.titulo);
    this.miformularioMetasPersonales.controls['FechaInicio'].setValue(this.MetaPersonalActual.fechaDeRegistro);
    this.miformularioMetasPersonales.controls['FechaFin'].setValue(this.MetaPersonalActual.fechaDeLaMeta);
    this.miformularioMetasPersonales.controls['Prioridad'].setValue(this.MetaPersonalActual.prioridad);
    this.miformularioMetasPersonales.controls['Descripcion'].setValue(this.MetaPersonalActual.descripcion);
  }
  editarMetaPersonal(){
    this.miformularioMetasPersonales.controls['FechaInicio'].enable();
    this.miformularioMetasPersonales.controls['FechaFin'].enable();
    this.miformularioMetasPersonales.controls['Prioridad'].enable();
    this.miformularioMetasPersonales.controls['Descripcion'].enable();
  }
  registrarNuevaMetaPersonal(){

  }
  cancelar(){
    this.visualizarMetaPersonal(this.MetaPersonalActual);
    this.miformularioMetasPersonales.controls['Titulo'].disable();
    this.miformularioMetasPersonales.controls['FechaInicio'].disable();
    this.miformularioMetasPersonales.controls['FechaFin'].disable();
    this.miformularioMetasPersonales.controls['Prioridad'].disable();
    this.miformularioMetasPersonales.controls['Descripcion'].disable();
  }
  verCalendario(){
    var mensaje:any = document.getElementById('mensaje9');
        mensaje.style.color='green';
        this.estadoCampo9="";
  }


  GuardarCambiosMetaPersonal(){
    if(this.validarCampos()){
      var today = new Date();
      var dd:any = today.getDate();
      var mm:any = today.getMonth() + 1; 
      var yyyy:any = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var todayString = yyyy + '-' + mm + '-' +dd ;
  
      var id=this.MetaPersonalActual._id;
      var titulo=this.miformularioMetasPersonales.controls.Titulo.value;
      var fechaInicio=todayString;
      var fechaFin=this.miformularioMetasPersonales.controls.FechaFin.value;
      var prioridad=this.miformularioMetasPersonales.controls.Prioridad.value;
      var descripcion=this.miformularioMetasPersonales.controls.Descripcion.value;
  
      var metasDao=new MisMetasDAO(this.http);
      metasDao.update_Meta(id,titulo,fechaInicio,fechaFin,prioridad,descripcion)
      .then((respuesta:any) => {

        this.miformularioMetasPersonales.controls['Titulo'].disable();
        this.miformularioMetasPersonales.controls['FechaInicio'].disable();
        this.miformularioMetasPersonales.controls['FechaFin'].disable();
        this.miformularioMetasPersonales.controls['Prioridad'].disable();
        this.miformularioMetasPersonales.controls['Descripcion'].disable();
        var metasPersonalesDao=new MisMetasDAO(this.http);
        metasPersonalesDao.listarMetas()
        .then((respuesta:any) => {
          console.log(respuesta);
          this.listaDeMetasPersonales=respuesta;
        }).catch((err:any) => {
          alert(err);
        });

      }).catch((err:any) => {
        alert(err);
      });
    }
    
  }
  eliminarMetaPersonal(){
    var r=confirm("¿Desea eliminar este registro?");
    if (r==true)
      {
        var metasPersonalesDao=new MisMetasDAO(this.http);
        metasPersonalesDao.delete_Meta(this.MetaPersonalActual._id)
        .then((respuesta:any) => {
          this.listaDeMetasPersonales=respuesta;
          this.miformularioMetasPersonales.reset();
          var metasPersonalesDao=new MisMetasDAO(this.http);
          metasPersonalesDao.listarMetas()
          .then((respuesta:any) => {
            console.log(respuesta);
            this.listaDeMetasPersonales=respuesta;
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
  @Output() irACrearMetasPersonalesEventEmiter= new EventEmitter();
  irACrearMetasPersonales(){
    this.irACrearMetasPersonalesEventEmiter.emit();
  }
  validarCampos(){

    var formularioValido=true;

    var tituloHTML:any = document.getElementById('titulo1');
    var fechaFinHTML:any = document.getElementById('fechaFin1');
    var prioridadHTML:any = document.getElementById('prioridad1');
    var descripcionHTML:any = document.getElementById('descripcion1');


  
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
