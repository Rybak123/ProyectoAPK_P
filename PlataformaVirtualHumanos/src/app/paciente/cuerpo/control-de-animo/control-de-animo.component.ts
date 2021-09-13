import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import {ActualizarOperacionesPaciente} from '../../../_services/pacienteServices/ActualizarOperacionesPaciente'
import { MandarOperacionesPaciente } from 'src/app/_services/pacienteServices/MandarOperacionesPaciente';
import { VerContenidoActividad } from 'src/app/_services/pacienteServices/VerContenidoActividad';
import { VerificarOperacionesPaciente } from 'src/app/_services/pacienteServices/VerificarOperacionesPaciente';
@Component({
  selector: 'app-control-de-animo',
  templateUrl: './control-de-animo.component.html',
  styleUrls: ['./control-de-animo.component.scss']
})
export class ControlDeAnimoComponent implements OnInit {

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
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeAnimo();
    controlJson.then((control:any) => {
      this.calendarOptions.events=this.actualizarOperacionesPaciente.convertirAEventosCalendario(control);
    }).catch((err:any) => {
      alert(err);
    });
  }
  guardarRegistros(valor:any){
    this.mandarOperacionesPaciente.actualizarControlDeAnimo(valor).then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
    this.obtenerRegistrosParaCalendario();
  }
  
  diaClickeado(arg:any) {
    var controlJson=this.actualizarOperacionesPaciente.obtenerControlDeAnimo();
    controlJson
    .then((control:any) => {
      var contenidoDia=this.verContenidoActividad.verContenidoActividad_Animo(control,arg.dateStr);
      if(contenidoDia!=""){
        alert(contenidoDia);
      }
    }).catch((err:any) => {
      alert(err);
    });
  }
  diaYaControlado(){
    var diaFueControlado=this.diaDeControlActualizado.verControlDeAnimoActualizado();
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

