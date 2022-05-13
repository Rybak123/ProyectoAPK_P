import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../_services/sidenavService';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services';
import { PacienteVO } from '../../../_models';
import { NavigationService } from 'src/app/_services/paciente_services/navigation_services/navigationService';



@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.scss'],
  
})
export class BarraDeNavegacionComponent implements OnInit {

  usuarioLogueado:any;
  currentUser: PacienteVO|any;
  constructor(private sideNavService: SidenavService,private router: Router,
  private authenticationService: AuthenticationService,
  private navigationService:NavigationService) { this.authenticationService.currentUser.subscribe(x => this.currentUser = x); }
  
  ngOnInit(): void {

    
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  verPerfilPaciente(){
    this.navigationService.iraVerPerfil();
  }

  clickMenu() { 
    this.sideNavService.toggle();
  }
  verNotificaciones(){
    this.sideNavService.abrirNotificaciones();
  }

}
