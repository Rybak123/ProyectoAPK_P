//import { AdministradorService } from './../../../../_services/administrador-service';
import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AdministradorService } from 'src/app/_services/administrador-service';
import { first } from 'rxjs/operators';
import { Administrador } from 'src/app/_models/administrador_model/administrador';
import { Evento } from 'src/app/_models/evento_model/Evento';
import { EventoService } from 'src/app/_services/eventosServices/evento.service';
@Component({
  selector: 'app-gestion-eventos',
  templateUrl: './gestion-eventos.component.html',
  styleUrls: ['./gestion-eventos.component.scss']
})
export class GestionEventosComponent implements OnInit {

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
    subscribe((evento: any) => this.eventos = evento.resultado)

  }
  mostrarPeticion(){
  }

  visualizarEvento(EventoSeleccionado: any){
    this.eventoActual= EventoSeleccionado;
  }
  
  deshabilitarEvento(idEventoSeleccionado:any){
    this.isDeleting=true;
    this.gestioneventos.desabilitarEvento(idEventoSeleccionado)
            .pipe(first())
            .subscribe(() => this.listarEventos())
            .add(() => this.isDisabling = false);
  }
  habilitarEvento(idEventoSeleccionado:any){
    this.isHabilitar=true;
    this.gestioneventos.habilitarEvento(idEventoSeleccionado)
           .pipe(first())
          .subscribe(() => this.listarEventos())
           .add(() => this.isHabilitar = false);
 } 
  
 actualizarEvento(){
   var evento = document.getElementById("nombre");
 }

  @Output() irACrearEventoEmiter = new EventEmitter();
  irACrearEvento(){
      this.irACrearEventoEmiter.emit();
  }
  @Output() irAModificarEventoEmiter = new EventEmitter();
  irAModificarEvento(){
    this.irAModificarEventoEmiter.emit();
  }
  convertirFechaYQuitarHoras(fecha:any){
    var fechLibro = new Date(fecha);
    var dd = String(fechLibro.getDate()).padStart(2, '0');
    var mm = String(fechLibro.getMonth() + 1).padStart(2, '0'); 
    var yyyy = fechLibro.getFullYear();
    var fechaActualString= yyyy + '-' + mm+ '-' +dd;
    return fechaActualString;
  }

}
