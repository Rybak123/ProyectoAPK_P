import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import {ActualizarOperacionesPaciente} from '../../../_services/pacienteServices/ActualizarOperacionesPaciente'
import { MandarOperacionesPaciente } from 'src/app/_services/pacienteServices/MandarOperacionesPaciente';
import { VerContenidoActividad } from 'src/app/_services/pacienteServices/VerContenidoActividad';
import { VerificarOperacionesPaciente } from 'src/app/_services/pacienteServices/VerificarOperacionesPaciente';
@Component({
  selector: 'app-control-de-energia',
  templateUrl: './control-de-energia.component.html',
  styleUrls: ['./control-de-energia.component.scss']
})
export class ControlDeEnergiaComponent implements OnInit {
  calendarVisible = true;
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
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
    this.obtenerRegistrosParaCalendario();
  }
  
  diaClickeado(arg:any) {
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeEnergia();
    controlJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Energia(control,arg.dateStr);
      if(contenidoDia!=""){
        alert(contenidoDia);
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeEnergiaActualizado();
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




