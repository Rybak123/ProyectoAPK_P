
import { CalendarOptions } from '@fullcalendar/angular';
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import{ GlobalConstants } from '../app/global-constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

    constructor() { 

        console.log(GlobalConstants.apiURL);

    }

    ngOnInit() {


    }
}

