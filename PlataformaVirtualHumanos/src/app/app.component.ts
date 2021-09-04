
import { CalendarOptions } from '@fullcalendar/angular';
import { Component,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'PlataformaVirtualHumanos';
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

