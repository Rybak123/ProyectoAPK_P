import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
@Component({
  selector: 'app-calificar-mes',
  templateUrl: './calificar-mes.component.html',
  styleUrls: ['./calificar-mes.component.scss']
})
export class CalificarMesComponent implements OnInit {

  constructor() { }
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

  ngOnInit(): void {
  }
}
