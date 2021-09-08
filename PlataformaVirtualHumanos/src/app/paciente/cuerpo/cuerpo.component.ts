import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../_services/sidenavService';
@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss'],
})
export class CuerpoComponent implements OnInit {

  @ViewChild('sidenav') sidenav:  ElementRef<MatSidenav>|any;
  
  constructor(private sideNavService: SidenavService) { }

  ngOnInit(): void {
  this.abrir();
  }
  abrir(){
    this.sideNavService.sideNavToggleSubject.subscribe((v)=> {
       this.sidenav.show();
     });
  }
}




