import { OnInit,Input,EventEmitter, ViewChild } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import { ActualizarOperacionesPaciente } from '../../../../../_services/paciente_services/agenda_services/controlDeActividades/ActualizarOperacionesPaciente';
import { MandarOperacionesPaciente } from '../../../../../_services/paciente_services/agenda_services/controlDeActividades/MandarOperacionesPaciente';
import { VerificarOperacionesPaciente } from '../../../../../_services/paciente_services/agenda_services/controlDeActividades/VerificarOperacionesPaciente';
import { VerContenidoActividad } from '../../../../../_services/paciente_services/agenda_services/controlDeActividades/VerContenidoActividad';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-control-de-consumo-de-agua',
  templateUrl: './control-de-consumo-de-agua.component.html',
  styleUrls: ['./control-de-consumo-de-agua.component.scss']
})
export class ControlDeConsumoDeAguaComponent implements OnInit {diasControlados:any;

  estadoActividad="";
  calendarVisible = true;
  title = '';
  calendarOptions: CalendarOptions = {
    locale: esLocale, 
    initialView: 'dayGridMonth',
    eventContent:this.renderEventContent,
    dateClick: this.diaClickeado.bind(this),
    events: [   ]
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
    this.obtenerRegistrosParaCalendario();
    this.diaYaControlado();
  }
  obtenerRegistrosParaCalendario(){
    var controlDeAguaJson=this.actualizarOperacionesPaciente.obtenerControlDeAgua();
    controlDeAguaJson.then((control:any) => {
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario(control);
    }).catch((err:any) => {
    });
  }
  guardarRegistros(valor:any){
    this.mandarOperacionesPaciente.actualizarControlDeAgua(valor).then((respuesta:any) => {
      this.obtenerRegistrosParaCalendario();
      this.diaYaControlado()
    }).catch((err:any) => {
      alert(err);
    });
  }
  
  diaClickeado(arg:any) {
    var controlDeAguaJson=this.actualizarOperacionesPaciente.obtenerControlDeAgua();
    controlDeAguaJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Agua(control,arg.dateStr);
      if(contenidoDia!=""){
        alert("Este dia consumiste "+contenidoDia+" de agua.");
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeAguaActualizado();
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
    if (eventInfo) {
       innerHtml = "<img style='width:30%; height:30%;margin-left: auto;margin-right: auto;display:block;' src='.../../../../assets/img/iconosCalendario/water-drop.png'>";
       return createElement = { html: '<div>'+innerHtml+'</div>' }
    }
    else{
      return null;
    }
    }
}

