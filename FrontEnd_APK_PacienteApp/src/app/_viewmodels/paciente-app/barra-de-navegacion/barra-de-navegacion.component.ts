import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidenavService } from '../../../_services/sidenavService';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services';
import { PacienteVO } from '../../../_models';
import { NavigationService } from 'src/app/_services/paciente_services/navigation_services/navigationService';
import { NotificacionesService } from 'src/app/_services/notificacionesService';
import { Evento } from 'src/app/_models/evento_model/Evento';
import { EventoService } from 'src/app/_services/eventosServices/evento.service';
import { Subscription } from 'rxjs';
import { PacienteService } from 'src/app/_services/paciente-service';
@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.scss'],
  
})
export class BarraDeNavegacionComponent implements OnInit,OnDestroy {
  public eventos! :Evento[];
  private _notificacionesSuscripcion:any;
  hayNotificacionesNuevas:any;
  usuarioLogueado:any;
  currentUser: PacienteVO|any;
  constructor(private sideNavService: SidenavService,private router: Router,
  private authenticationService: AuthenticationService,
  private navigationService:NavigationService,
  private notificacionesService:NotificacionesService,
  private gestioneventos:EventoService,
  private gestionPacientes:PacienteService) { this.authenticationService.currentUser.pipe().subscribe(x => this.currentUser = x); }

  usuario:any;
  ngOnInit(): void {
    
    


    this.notificacionesService.listen("messageRespuesta").subscribe((data)=>{
      console.log("Nuevo mensaje del servidor");
      this.hayNotificacionesNuevas=true;
    });

    this.listarEventos();
   
    var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
    this.usuario=JSON.parse(pacienteInfo);

    this.gestioneventos.asObservable().subscribe(() => { 
      this.actualizarEventos();
    });
    this.actualizarEventos();
  }
  actualizarEventos(){
    this.gestionPacientes.leerPaciente(this.usuario.id).pipe().
    subscribe((paciente: any) => {
      console.log("Actualizado");
      var notificaciones=paciente.notificacionesVistas;
      this.gestioneventos.listarEventos().pipe().
      subscribe((eventoObtenido: any) => {
        var eventosCreados=eventoObtenido.resultado.map((evento: { _id: any}) => (evento._id));
        var difference = eventosCreados.filter((x:any) => notificaciones.indexOf(x) === -1);
        console.log(difference);
        console.log(difference>0);
        if(difference.length>0){
          this.hayNotificacionesNuevas=true;
        }
        else{
          this.hayNotificacionesNuevas=false;
        }
      }).add((eventoObtenido:any)=>{
        
      })
     

    })
  }
  getIdEventos(testResults:any){
    let eventos:any = [];
    testResults.map((testResult:any) => {
      //testResult.map(({"_id"}) => {if(_id) eventos.push(_id)})
    })
    return eventos;
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
  listarEventos(){
    this.gestioneventos.listarEventos().pipe().
    subscribe((evento: any) => {
      this.eventos = evento.resultado}).add((x:any)=>{
        console.log(this.usuario);
        console.log(this.eventos);
    })
  }
  ngOnDestroy() {
    this._notificacionesSuscripcion.unsubscribe();
  }

}
