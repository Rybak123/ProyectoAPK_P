import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import { ActualizarOperacionesPaciente } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/ActualizarOperacionesPaciente';
import { MandarOperacionesPaciente } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/MandarOperacionesPaciente';
import { VerificarOperacionesPaciente } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/VerificarOperacionesPaciente';
import { VerContenidoActividad } from '../../../../_services/paciente_services/agenda_services/controlDeActividades/VerContenidoActividad';

@Component({
  selector: 'app-control-de-sueno',
  templateUrl: './control-de-sueno.component.html',
  styleUrls: ['./control-de-sueno.component.scss']
})
export class ControlDeSuenoComponent implements OnInit {
  estadoActividad="";
  calendarVisible = true;
  title = '';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventContent:this.renderEventContent,
    dateClick: this.diaClickeado.bind(this),
    events: []
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
  renderEventContent(eventInfo:any, createElement:any) {
  var innerHtml;
  if (eventInfo) {
     innerHtml = eventInfo.event._def.title+"<img style='width:30%; height:30%;margin-left: auto;margin-right: auto;display:block;' src='.../../../../assets/img/iconosCalendario/sonando.png'>";
     return createElement = { html: '<div>'+innerHtml+'</div>' }
  }
  else{
    return null;
  }
  }
  ngOnInit(): void {
    this.obtenerRegistrosParaCalendario();
    this.diaYaControlado();
  }
  obtenerRegistrosParaCalendario(){
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeSueno();
    controlJson.then((control:any) => {
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario_ControlDeSueno(control);
    }).catch((err:any) => {
      alert(err);
    });
  }
  guardarRegistros(valor:any){
    this.mandarOperacionesPaciente.actualizarControlDeSueno(valor).then((respuesta:any) => {
      console.log(respuesta);
      this.obtenerRegistrosParaCalendario();
      this.diaYaControlado()
    }).catch((err:any) => {
      alert(err);
    });
   
  }
  
  diaClickeado(arg:any) {
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeSueno();
    controlJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Sueno(control,arg.dateStr);
      if(contenidoDia!=""){
        alert("Este dia dormiste "+contenidoDia);
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeSuenoActualizado();
    diaFueControlado.then((control:any) => {
      if(control){
        var text:any = document.getElementById("textoConfirmatorio");
        text.style.color='green';
        this.estadoActividad="Ya controlaste este d??a";
      }else{
        var text:any = document.getElementById("textoConfirmatorio");
        text.style.color='red';
        this.estadoActividad="No controlaste este d??a";
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
}
