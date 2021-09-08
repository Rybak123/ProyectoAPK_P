import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../_services/sidenavService';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.scss'],
  
})
export class BarraDeNavegacionComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit(): void {
  }
  clickMenu() { 
    this.sideNavService.toggle();
  }
}
