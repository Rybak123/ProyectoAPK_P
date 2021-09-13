import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import {ActualizarOperacionesPaciente} from '../../../_services/pacienteServices/ActualizarOperacionesPaciente'
import { MandarOperacionesPaciente } from 'src/app/_services/pacienteServices/MandarOperacionesPaciente';
import { VerContenidoActividad } from 'src/app/_services/pacienteServices/VerContenidoActividad';
import { VerificarOperacionesPaciente } from 'src/app/_services/pacienteServices/VerificarOperacionesPaciente';
@Component({
  selector: 'app-control-de-estudio',
  templateUrl: './control-de-estudio.component.html',
  styleUrls: ['./control-de-estudio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ControlDeEstudioComponent implements OnInit{
  myMap:any;
  public hora:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;
  public horaString:String = "00";
  public minutosString:String = "00";
  public segundosString:String = "00";
  public contador:any;
  diasControlados:any;
  calendarVisible = true;
  localControlDeEstudio:any;
  start(){ 
    if(this.contador == undefined){ 
      this.contador = setInterval(()=>{ 
        this.segundos += 1;
        this.segundosString=('0' + this.segundos).slice(-2);
        if(this.segundos == 60){ 
          this.segundos = 0;
          this.minutos +=1;
          this.minutosString=('0' + this.minutos).slice(-2);
          if(this.minutos == 60){ 
            this.minutos = 0;
            this.hora +=1;
            this.horaString=('0' + this.horaString).slice(-2);
            if(this.hora = 24){ 
              this.hora = 0;
            }
          }
        }
      }
      ,1000);
    }    
  }
  stop(){ 
    var e:any = document.getElementById("selectBar");
    var strUser = e.options[e.selectedIndex].text;
    this.myMap.set(strUser,this.horaString.toString()+":"+this.minutosString+":"+this.segundosString);
    clearInterval(this.contador);
    this.contador = null;
    this.guardarRegistros();
    this.obtenerRegistrosParaCalendario();
  }
  verCantidadHorasEstudiadas(){
    var e:any = document.getElementById("selectBar");
    var strUser = e.options[e.selectedIndex].text;
    var horasMateriaSeleccioanda:any=this.myMap.get(strUser);
    var horasMateriaSeleccioandaSplit=horasMateriaSeleccioanda.split(":");
    this.hora= parseInt(horasMateriaSeleccioandaSplit[0]);
    this.minutos =parseInt(horasMateriaSeleccioandaSplit[1]);
    this.segundos = parseInt(horasMateriaSeleccioandaSplit[2]);
    this.horaString= horasMateriaSeleccioandaSplit[0];
    this.minutosString =horasMateriaSeleccioandaSplit[1];
    this.segundosString = horasMateriaSeleccioandaSplit[2];
  }
  aumentarMateria(){

    var text:any = document.getElementById('nuevaMateria');
    this.myMap.set(text.value, "00:00:00");
    let str = '';
    this.myMap.forEach((key:any, val:any) => {
      str += `<option value='${key}'>${val}</option>`
    });
    var select:any = document.getElementById('selectBar');
    select.innerHTML = str;
  }


  title = '';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.diaClickeado.bind(this),
    events: [   
    ]
  };
  mandarOperacionesPaciente:any;
  actualizarOperacionesPaciente:any;
  verContenidoActividad:any;
  diaDeControlActualizado:any;
  constructor(private http:HttpClient) {
      this.actualizarOperacionesPaciente=new ActualizarOperacionesPaciente(this.http);
      this.mandarOperacionesPaciente=new MandarOperacionesPaciente(this.http);
      this.diaDeControlActualizado=new VerificarOperacionesPaciente(this.http);
      this.verContenidoActividad=new VerContenidoActividad();
  }

  ngOnInit(): void {
    this.myMap = new Map();
    var select:any = document.getElementById('selectBar');

    let str = '';
    this.myMap.forEach((key:any, val:any) => {
    });
    select.innerHTML = str;
    this.obtenerRegistrosParaCalendario();
    this.diaYaControlado();
  }
  obtenerRegistrosParaCalendario(){
    var select:any = document.getElementById('selectBar');
    var MyDate = new Date(); 
        var fechaActual = MyDate.getFullYear()+ '-'
        + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
        + ('0' + MyDate.getDate()).slice(-2);

    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeEstudio();
    controlJson.then((control:any) => {
      control.forEach((element:any) => {
        if(element.fecha==fechaActual){
          var materiasEstudiadas=element.materiasEstudiadas;
          materiasEstudiadas.forEach((materia:any) => {
            this.myMap.set(materia.materia, materia.cantidadDeTiempo);
            let str = '';
            this.myMap.forEach((key:any, val:any) => {
              str += `<option value='${key}'>${val}</option>`
            });
            select.innerHTML = str;
          });
          
        }
      });
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario(control);
    }).catch((err:any) => {
      console.log(err);
    });
  }
  guardarRegistros(){
    var materiasEstudiadas:any=[];
    console.log(this.myMap);
    this.myMap.forEach((key:any, val:any) => {
      materiasEstudiadas.push({"cantidadDeTiempo":key,"materia":val});
    });
    this.mandarOperacionesPaciente.actualizarControlDeEstudio(materiasEstudiadas).then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
    this.obtenerRegistrosParaCalendario();
  }
  
  diaClickeado(arg:any) {
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeEstudio();
    controlJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Estudio(control,arg.dateStr);
      console.log("despues");
      if(contenidoDia!=""){
        alert(contenidoDia);
      }
    }).catch((err:any) => {
      console.log("sadsd");
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeEstudioActualizado();
    diaFueControlado.then((control:any) => {
    if(control){
      console.log("Dia controlado");
    }else{
      console.log("Dia no controlado");
    }
    }).catch((err:any) => {
      alert(err);
    });
  }
   

  


  
  
}
