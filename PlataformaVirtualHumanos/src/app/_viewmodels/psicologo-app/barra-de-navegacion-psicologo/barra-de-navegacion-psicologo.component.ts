import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticacionPsicologoService } from 'src/app/_services/login_services/authentication-psicologo.service';
import { PsicologoNavigationService } from 'src/app/_services/psicologo_services/psicologo.navigation.service';

@Component({
  selector: 'app-barra-de-navegacion-psicologo',
  templateUrl: './barra-de-navegacion-psicologo.component.html',
  styleUrls: ['./barra-de-navegacion-psicologo.component.scss']
})
export class BarraDeNavegacionPsicologoComponent implements OnInit {

  constructor(private autenticacionService:AuthenticacionPsicologoService,private router:Router,
    private psicologoNavigationService:PsicologoNavigationService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.autenticacionService.logout()
    this.router.navigate(['/loginPsicologo']);
  }
  verPerfilPsicologo(){
    this.psicologoNavigationService.iraVerPerfil();
  }
  toggle(){
    console.log("sadsad");
    this.psicologoNavigationService.toggle();
  }
}
