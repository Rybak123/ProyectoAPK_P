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
  estadoActividad="";
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
    if(this.myMap.size>0)
    {
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
    }else{
      alert("Debes ingresar una materia");
    }
       
  }
  stop(){ 
    if(this.myMap.size>0){
      var e:any = document.getElementById("selectBar");
      var strUser = e.options[e.selectedIndex].text;
      this.myMap.set(strUser,this.horaString.toString()+":"+this.minutosString+":"+this.segundosString);
      clearInterval(this.contador);
      this.contador = null;
      this.guardarRegistros();
    }
    else{
      alert("Debes ingresar una materia");
    }
   
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
    if(text.value.length>0){
      this.myMap.set(text.value, "00:00:00");
      let str = '';
      this.myMap.forEach((key:any, val:any) => {
        str += `<option value='${key}'>${val}</option>`
      });
      var select:any = document.getElementById('selectBar');
      select.innerHTML = str;
      this.obtenerRegistrosParaCalendario();
      
    }
    else{
      alert("No debes ingresar una materia en blanco");
    }
  
    
  }


  title = '';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventContent:this.renderEventContent,
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
            var tiempo=materia.cantidadDeTiempo.split(":");
            this.hora=parseInt(tiempo[0]);
            this.minutos=parseInt(tiempo[1]);
            this.segundos=parseInt(tiempo[2]);
            this.segundosString=('0' + this.segundos).slice(-2);
            this.minutosString=('0' + this.minutosString).slice(-2);
            this.horaString=('0' + this.horaString).slice(-2);
            select.innerHTML = str;

          });
          
        }
      });
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario_ControlDeEstudio(control);
    }).catch((err:any) => {
      console.log(err);
    });
  }
  guardarRegistros(){
    var materiasEstudiadas:any=[];
    this.myMap.forEach((key:any, val:any) => {
      materiasEstudiadas.push({"cantidadDeTiempo":key,"materia":val});
    });
    this.mandarOperacionesPaciente.actualizarControlDeEstudio(materiasEstudiadas).then((respuesta:any) => {
      this.obtenerRegistrosParaCalendario();
      this.diaYaControlado();
    }).catch((err:any) => {
      alert(err);
    });
    
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
      console.log(control);
      if(control){
        var text:any = document.getElementById("textoConfirmatorio");
        text.style.color='green';
        this.estadoActividad="Ya controlaste este día";
      }else{
        var text:any = document.getElementById("textoConfirmatorio");
        text.style.color='red';
        this.estadoActividad="No controlaste este día";
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  renderEventContent(eventInfo:any, createElement:any) {
    var innerHtml;
    if (eventInfo) {
       innerHtml = eventInfo.event._def.title+"<img style='width:30%; height:30%;margin-left: auto;margin-right: auto;display:block;' src='.../../../../assets/img/iconosCalendario/book.png'>";
       return createElement = { html: '<div>'+innerHtml+'</div>' }
    }
    else{
      return null;
    }
    }
  borrarMateria(){
    var e:any = document.getElementById("selectBar");
    var strUser = e.options[e.selectedIndex].text;
    this.myMap.delete(strUser);
    var str="";
    this.myMap.forEach((key:any, val:any) => {
      str += `<option value='${key}'>${val}</option>`
    });
    console.log(this.myMap);
    e.innerHTML = str;
    this.hora=0;
    this.minutos=0;
    this.segundos=0;
    this.horaString = "00";
    this.minutosString = "00";
    this.segundosString = "00";

 
    clearInterval(this.contador);
    this.contador = null;
    this.guardarRegistros();
    
  }
  


  
  
}
