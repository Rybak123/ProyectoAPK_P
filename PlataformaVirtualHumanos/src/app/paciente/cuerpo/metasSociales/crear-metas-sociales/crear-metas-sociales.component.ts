import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
@Component({
  selector: 'app-crear-metas-sociales',
  templateUrl: './crear-metas-sociales.component.html',
  styleUrls: ['./crear-metas-sociales.component.scss']
})
export class CrearMetasSocialesComponent implements OnInit {

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
