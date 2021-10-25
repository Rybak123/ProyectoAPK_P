//import { AdministradorService } from './../../../../_services/administrador-service';
import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AdministradorService } from 'src/app/_services/administrador-service';
import { first } from 'rxjs/operators';
import { Administrador } from 'src/app/_models/administrador_model/administrador';
@Component({
  selector: 'app-gestion-administrador',
  templateUrl: './gestion-administrador.component.html',
  styleUrls: ['./gestion-administrador.component.scss']
})
export class GestionAdministradorComponent implements OnInit {
  public administradores! :Administrador[];
  public administradorActual:any;
  public isDeleting = false;
  public isDisabling = false;
  public idAdminsitradorActual:any;
  public isHabilitar = false;

  constructor(private gestionAdministrador: AdministradorService) { }

  ngOnInit(): void {
    this.listarAdministrador();
  }
  private listarAdministrador(){
    this.gestionAdministrador.listarAdministrador().pipe().
    subscribe((administrador: any) => this.administradores = administrador.resultado)

  }
  mostrarPeticion(){
  }
  visualizarAdministrador(administradorSeleccionado: any){
    this.administradorActual= administradorSeleccionado;
    console.log(administradorSeleccionado);
  }
  
  deshabilitarAdministrador(idPacienteSeleccionado:any){
    this.isDeleting=true;
    this.gestionAdministrador.desabilitarAdmisntrador(idPacienteSeleccionado)
            .pipe(first())
            .subscribe(() => this.listarAdministrador())
            .add(() => this.isDisabling = false);
  }
  habilitarAdministrador(idPacienteSeleccionado:any){
    this.isHabilitar=true;
    this.gestionAdministrador.habilitarAdministrador(idPacienteSeleccionado)
           .pipe(first())
          .subscribe(() => this.listarAdministrador())
           .add(() => this.isHabilitar = false);
 }
  
  actualizarAdministrador(){
   var nombre = document.getElementById("nombre");
 }
 @Output() irACrearAdministradorEmiter = new EventEmitter();
  irACrearAdministrador(){
    this.irACrearAdministradorEmiter.emit();
  }
  @Output() irAModificarAdministradorEmiter = new EventEmitter();
  irAModificarAdministrador(){
    this.irAModificarAdministradorEmiter.emit();
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
