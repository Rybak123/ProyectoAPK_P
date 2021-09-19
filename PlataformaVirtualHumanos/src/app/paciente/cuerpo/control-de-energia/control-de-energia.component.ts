import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import {ActualizarOperacionesPaciente} from '../../../_services/controlDeActividades/ActualizarOperacionesPaciente'
import { MandarOperacionesPaciente } from 'src/app/_services/controlDeActividades/MandarOperacionesPaciente';
import { VerContenidoActividad } from 'src/app/_services/controlDeActividades/VerContenidoActividad';
import { VerificarOperacionesPaciente } from 'src/app/_services/controlDeActividades/VerificarOperacionesPaciente';
@Component({
  selector: 'app-control-de-energia',
  templateUrl: './control-de-energia.component.html',
  styleUrls: ['./control-de-energia.component.scss']
})
export class ControlDeEnergiaComponent implements OnInit {
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
    this.obtenerRegistrosParaCalendario();
    this.diaYaControlado();
  }
  obtenerRegistrosParaCalendario(){
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeEnergia();
    controlJson.then((control:any) => {
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario(control);
    }).catch((err:any) => {
      alert(err);
    });
  }
  guardarRegistros(valor:any){
    this.mandarOperacionesPaciente.actualizarControlDeEnergia(valor).then((respuesta:any) => {
      this.obtenerRegistrosParaCalendario();
      this.diaYaControlado()
    }).catch((err:any) => {
      alert(err);
    });
  }
  
  diaClickeado(arg:any) {
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeEnergia();
    controlJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Energia(control,arg.dateStr);
      if(contenidoDia!=""){
        alert("Este día estuviste con el "+contenidoDia+" de energia.");
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeEnergiaActualizado();
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
       innerHtml = eventInfo.event._def.title+"<img style='width:30%; height:30%;margin-left: auto;margin-right: auto;display:block;' src='.../../../../assets/img/iconosCalendario/lighting.png'>";
       return createElement = { html: '<div>'+innerHtml+'</div>' }
    }
    else{
      return null;
    }
    }
}




