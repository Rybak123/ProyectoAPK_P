import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from 'src/app/_services/notificacionesService';
import { PacienteService } from 'src/app/_services/paciente-service';
import {Evento} from '../../../../_models/evento_model/Evento'
import {EventoService} from '../../../../_services/eventosServices/evento.service'
@Component({
  selector: 'app-eventos-notificaciones',
  templateUrl: './eventos-notificaciones.component.html',
  styleUrls: ['./eventos-notificaciones.component.scss']
})
export class EventosNotificacionesComponent implements OnInit {

  public eventos! :any[];
  public eventoActual:any;
  public isDeleting = false;
  public isDisabling = false;
  public idEventoActual:any;
  public isHabilitar = false;
  public usuario:any;
  constructor(private gestioneventos: EventoService,private pacienteService:PacienteService,private notificacionesService:NotificacionesService) { }

  ngOnInit(): void {
    this.notificacionesService.listen("messageRespuesta").subscribe((data)=>{
      this.listarEventos();
    });

    var pacienteInfo=localStorage.getItem('currentUser');
    if(pacienteInfo==null){
        pacienteInfo="null";
        throw console.error("Paciente no encontrado");
    }
this.usuario=JSON.parse(pacienteInfo);

    this.listarEventos();
  }
  private listarEventos(){
    this.gestioneventos.listarEventos().pipe().
    subscribe((evento: any) => {

      this.pacienteService.leerPaciente(this.usuario.id).pipe().
      subscribe((paciente: any) => {
        console.log("Actualizado");
        var notificaciones=paciente.notificacionesVistas;
       
        var eventoMapeado=evento.resultado
        eventoMapeado= eventoMapeado.map((obj:any)=> {
          const found = notificaciones.find((element:any) => element == obj.id);
          if(found){
            return({ obj, visto: 'true' })
          }else{
            return({ obj, visto: 'false' })
          }
          
        })
        console.log(eventoMapeado);
        this.eventos = eventoMapeado
      })

    
    }).add((x:any)=>{

      console.log(this.eventos)
    })
  }
  marcarComoEventoVisto(idEvento:any){
    this.pacienteService.marcarComoVistoUnEvento(this.usuario.carnetDeIdentidad,idEvento).pipe().
    subscribe((evento: any) => {}).add((x:any)=>{
      this.gestioneventos.actualizarNotificaiones();
      this.listarEventos();
    })
  }
  marcarComoEventoNoVisto(idEvento:any){
    this.pacienteService.desmarcarComoVistoUnEvento(this.usuario.carnetDeIdentidad,idEvento).pipe().
    subscribe((evento: any) => {}).add((x:any)=>{
      this.gestioneventos.actualizarNotificaiones();
      this.listarEventos();
    })
  }
  
}
