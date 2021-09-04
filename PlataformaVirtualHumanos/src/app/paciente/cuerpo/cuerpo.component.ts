import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CuerpoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }
  
}




export class AppComponent {
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
}
