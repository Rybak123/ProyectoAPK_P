import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../_services/sidenavService';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services';
import { PacienteVO } from '../../../_models';



@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.scss'],
  
})
export class BarraDeNavegacionComponent implements OnInit {

  usuarioLogueado:any;
  currentUser: PacienteVO|any;
  constructor(private sideNavService: SidenavService,private router: Router,
  private authenticationService: AuthenticationService) { this.authenticationService.currentUser.subscribe(x => this.currentUser = x); }
  
  ngOnInit(): void {
    var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
    var usuario:any =JSON.parse(pacienteInfo);
    this.usuarioLogueado=usuario.nombres+" "+usuario.apellidos;
    
    
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


  
  clickMenu() { 
    this.sideNavService.toggle();


  }
}
