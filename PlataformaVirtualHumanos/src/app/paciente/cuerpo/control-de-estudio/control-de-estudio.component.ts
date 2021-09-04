import { OnInit } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-control-de-estudio',
  templateUrl: './control-de-estudio.component.html',
  styleUrls: ['./control-de-estudio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ControlDeEstudioComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    this.iniciarCalendario(controlDeEstudio);
  }
  title = 'practica1';
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

  iniciarCalendario(controlDeEstudioJson:any){
    
  }
  

}
var controlDeEstudio=[
  {fecha:"2021-03-08T04:00:00.000+00:00",cantidadDeTiempo:3,materia:"Matematicas"},
  {fecha:"2021-04-08T04:00:00.000+00:00",cantidadDeTiempo:6,materia:"Lenguaje"},
  {fecha:"2021-05-08T04:00:00.000+00:00",cantidadDeTiempo:9,materia:"Fisica"},
]; 


