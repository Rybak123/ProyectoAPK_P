import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorNavigationService } from 'src/app/_services/administrador_services/administrador.navigation.service';
import { AuthenticacionAdministradorService } from 'src/app/_services/login_services/authentication-administrador.service';

@Component({
  selector: 'app-barra-de-navegacion-administrador',
  templateUrl: './barra-de-navegacion-administrador.component.html',
  styleUrls: ['./barra-de-navegacion-administrador.component.scss']
})
export class BarraDeNavegacionAdministradorComponent implements OnInit {

  constructor(private autenticacionService:AuthenticacionAdministradorService,
    private router:Router,
    private administradorNavegacionService:AdministradorNavigationService) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.autenticacionService.logout()
    this.router.navigate(['/loginAdministrador']);
  }
  verPerfilPsicologo(){
    this.administradorNavegacionService.iraVerPerfil();
  }
  toggle(){
    console.log("sadsad");
    this.administradorNavegacionService.toggle();
  }
}
