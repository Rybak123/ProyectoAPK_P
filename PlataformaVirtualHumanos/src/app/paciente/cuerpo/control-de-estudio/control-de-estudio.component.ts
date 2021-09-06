import { OnInit,Input,EventEmitter } from '@angular/core';
import { Component,ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';

@Component({
  selector: 'app-control-de-estudio',
  templateUrl: './control-de-estudio.component.html',
  styleUrls: ['./control-de-estudio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ControlDeEstudioComponent implements OnInit{
  constructor() { }
  calendarVisible = true;
  ngOnInit(): void {
    controlDeEstudio.forEach( element=>{
    console.log(element);
       var mydate = new Date(element.fecha.trim());
       var descripcion= "Tiempo: "+element.cantidadDeTiempo+'\n'+" Materia: "+element.materia;
      
       this.calendarEvents= this.calendarEvents.concat({ 
         title: descripcion,
         start: mydate
      })
   });
   this.calendarOptions.events=this.calendarEvents;
  //  this.iniciarCalendario(controlDeEstudio);
  }
  calendarEvents: EventInput[] = [ 
  ];
  title = 'practica1';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [   
    ]
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
  //iniciarCalendario(controlDeEstudioJson:any){
  //}
}
var controlDeEstudio=[
  {fecha:"2021-09-03T04:00:00.000+00:00",cantidadDeTiempo:3,materia:"Matematicas"},
  {fecha:"2021-09-04T04:00:00.000+00:00",cantidadDeTiempo:6,materia:"Lenguaje"},
  {fecha:"2021-09-05T04:00:00.000+00:00",cantidadDeTiempo:9,materia:"Fisica"},
]; 


