import { Component, OnInit } from '@angular/core';
import {Evento} from '../../../../_models/evento_model/Evento'
import {EventoService} from '../../../../_services/eventosServices/evento.service'
@Component({
  selector: 'app-eventos-notificaciones',
  templateUrl: './eventos-notificaciones.component.html',
  styleUrls: ['./eventos-notificaciones.component.scss']
})
export class EventosNotificacionesComponent implements OnInit {

  public eventos! :Evento[];
  public eventoActual:any;
  public isDeleting = false;
  public isDisabling = false;
  public idEventoActual:any;
  public isHabilitar = false;

  constructor(private gestioneventos: EventoService) { }

  ngOnInit(): void {
    this.listarEventos();
  }
  private listarEventos(){
    this.gestioneventos.listarEventos().pipe().
    subscribe((evento: any) => this.eventos = evento.resultado).add((x:any)=>{
      console.log(this.eventos)
    })

  }
  
}
