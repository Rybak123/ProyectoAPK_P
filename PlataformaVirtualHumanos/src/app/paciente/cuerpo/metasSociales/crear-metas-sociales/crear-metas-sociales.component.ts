import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";
import { MisMetasPersonalesDAO } from '../../../../_services/MisMetasPersonalesServices/MisMetasPersonalesDAO';
@Component({
  selector: 'app-crear-metas-sociales',
  templateUrl: './crear-metas-sociales.component.html',
  styleUrls: ['./crear-metas-sociales.component.scss']
})
export class CrearMetasSocialesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [   
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' } 
    ]
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
  marcarDiayActividad(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var fechaActualString= dd + '-' + mm+ '-' + yyyy;
    var anio:any=fechaActualString.split("-")[2];
    var mes:any=fechaActualString.split("-")[1];
    var dia:any=fechaActualString.split("-")[0];
    var fechaActualString = anio+"-"+mes+"-"+dia;
    var fechaActualMarcar = dia+"-"+mes+"-"+anio;
    var marcado= false;
    var diasYaMarcados:any=this.calendarOptions.events;
    diasYaMarcados.forEach((dia:any) => {
      console.log(dia.date+"-"+fechaActualString);
      if(dia.date==fechaActualString){
        marcado=true;
      }
    });
    if(!marcado){

      var selectBox:any=document.getElementById("selectBar");
      let selectedOption = selectBox.options[selectBox.selectedIndex];
      var actividadSeleccionada=selectedOption.text;
      var metasPersonalesDao=new MisMetasPersonalesDAO(this.http);
      metasPersonalesDao.create_MetaPersonal(actividadSeleccionada,fechaActualMarcar)
      .then((respuesta:any) => {
        console.log(respuesta);
      }).catch((err:any) => {
        alert(err);
      });
    }else{
      alert("Este dia ya fue marcado");
    }

    
    
  }
  cambiarCalendario(){
    var metasPersonalesDao=new MisMetasPersonalesDAO(this.http);
    metasPersonalesDao.listarMetasPersonales()
    .then((respuesta:any) => {
      this.seleccionarDatosYAñadirACalendario(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  ngOnInit(): void {
    var metasPersonalesDao=new MisMetasPersonalesDAO(this.http);
    metasPersonalesDao.listarMetasPersonales()
    .then((respuesta:any) => {
      respuesta;
    }).catch((err:any) => {
      alert(err);
    });
  }
  seleccionarDatosYAñadirACalendario(listaDeMetas:any){
    var calendarEvents: EventInput[] = [];
    var selectBox:any=document.getElementById("selectBar");
    let selectedOption = selectBox.options[selectBox.selectedIndex];
    var actividadSeleccionada=selectedOption.text;

    listaDeMetas.forEach((meta:any) => {
      if(meta.tipoDeActividad==actividadSeleccionada){
        var anio:any=meta.fechaDeCompletitud.split("-")[2];
        var mes:any=meta.fechaDeCompletitud.split("-")[1];
        var dia:any=meta.fechaDeCompletitud.split("-")[0];
        var fechaEvento = anio+"-"+mes+"-"+dia;
        calendarEvents= calendarEvents.concat({ 
        date:fechaEvento,
        description:"Controlado"
         })
      }
    });
    this.calendarOptions.events=calendarEvents;
     
  }
}


