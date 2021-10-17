import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import { ActualizarOperacionesPaciente } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/ActualizarOperacionesPaciente';
import { MandarOperacionesPaciente } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/MandarOperacionesPaciente';
import { VerificarOperacionesPaciente } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/VerificarOperacionesPaciente';
import { VerContenidoActividad } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/VerContenidoActividad';

@Component({
  selector: 'app-control-de-animo',
  templateUrl: './control-de-animo.component.html',
  styleUrls: ['./control-de-animo.component.scss']
})
export class ControlDeAnimoComponent implements OnInit {


  hojaEmocionActual!:any;
  estadoActividad="";
  calendarVisible = true;
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
    this.hojaEmocionActual = "assets/img/controlDeAnimo/HojaEnBlanco.png";
    this.obtenerRegistrosParaCalendario();
    this.diaYaControlado();
  }
  obtenerRegistrosParaCalendario(){
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeAnimo();
    controlJson.then((control:any) => {
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario(control);
    }).catch((err:any) => {
      alert(err);
    });
  }
  guardarRegistros(valor:any){
    this.mandarOperacionesPaciente.actualizarControlDeAnimo(valor).then((respuesta:any) => {
      this.obtenerRegistrosParaCalendario();
      this.diaYaControlado()
    }).catch((err:any) => {
      alert(err);
    });
  }
  
  diaClickeado(arg:any) {
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeAnimo();
    controlJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Animo(control,arg.dateStr);
      if(contenidoDia!=""){
        alert("Este día te sentiste "+contenidoDia+".");
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeAnimoActualizado();
    diaFueControlado.then((control:any) => {
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
    var fechaActualString:any=this.convertirFechaYQuitarHoras((new Date()).toDateString());
    var fechaIngresada:any=this.convertirFechaYQuitarHoras(new Date(eventInfo.event._instance.range.start).toDateString());
    console.log()
    if(fechaActualString==fechaIngresada){
      switch(eventInfo.event._def.title){
        case "Emocionada":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/HojaEmocionada.png";
        break;
        case "Triste":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Triste.png"
        break;
        case "Productiva":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Productiva.png"
        break;
        case "Feliz":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Feliz.png"
        break;
        case "Cansada":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Cansado.png"
        break;
        case "Enojada":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Enojado.png"
        break;
        case "Ansiosa":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Ansioso.png"
        break;
        case "Meeeeh":
          this.hojaEmocionActual = "assets/img/controlDeAnimo/Meeeeh.png"
        break;
      }
    }
    if (eventInfo) {
      switch(eventInfo.event._def.title){
        case "Emocionada":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/HojaEmocionada.png'>"
        break;
        case "Triste":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Triste.png'>"
        break;
        case "Productiva":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Productiva.png'>"
        break;
        case "Feliz":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Feliz.png'>"
        break;
        case "Cansada":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Cansado.png'>"
        break;
        case "Enojada":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Enojado.png'>"
        break;
        case "Ansiosa":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Ansioso.png'>"
        break;
        case "Meeeeh":
          innerHtml = "<img style='width:60%; height:60%;margin-left: auto;margin-right: auto;display:block;' src='assets/img/controlDeAnimo/Meeeeh.png'>"
        break;
      }
    
    }
    return createElement = { html: '<div>'+innerHtml+'</div>' }
  }
  convertirFechaYQuitarHoras(fecha:any){
    var fechLibro = new Date(fecha);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;
    return fechaActualString;
  }
}

