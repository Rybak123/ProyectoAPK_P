import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PacienteService } from 'src/app/_services/paciente-service';
import { first } from 'rxjs/operators';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
@Component({
  selector: 'app-gestion-pacientes',
  templateUrl: './gestion-pacientes.component.html',
  styleUrls: ['./gestion-pacientes.component.scss']
})
export class GestionPacientesComponent implements OnInit {
  //array de usuarios
  public pacientes!:Paciente[];
  public isDisabling = false;
  public pacienteActual:any;
  public idpacienteActual:any;

  constructor(private gestionPaciente: PacienteService) { }
  ngOnInit(): void {
    this.listarPacientes();
    console.log(this.pacientes);
  }
  private listarPacientes() {
    this.gestionPaciente.listarPacientes()
        .pipe(first())
        .subscribe((pacientes:any) => this.pacientes = pacientes);
  }

  verPacientes(){
    console.log(this.pacientes);
  }
  visualizarPaciente(pacienteSeleccionado:any){
    this.pacienteActual=pacienteSeleccionado;
  }
  deshabilitarPaciente(idPacienteSeleccionado:any){
    console.log(idPacienteSeleccionado);
    this.idpacienteActual=idPacienteSeleccionado;
    this.isDisabling=true;
    this.gestionPaciente.deshabilitarPaciente(idPacienteSeleccionado)
            .pipe(first())
            .subscribe(() => this.listarPacientes())
            .add(() => this.isDisabling = false);
  }
  habilitarPaciente(idPacienteSeleccionado:any){
    this.idpacienteActual=idPacienteSeleccionado;
    this.isDisabling=true;
    this.gestionPaciente.habilitarPaciente(idPacienteSeleccionado)
            .pipe(first())
            .subscribe(() => this.listarPacientes())
            .add(() => this.isDisabling = false);
  }
  actualizarPaciente(){
    
  }

  @Output() irACrearPacienteEmiter = new EventEmitter();

  irACrearPaciente(){
    this.irACrearPacienteEmiter.emit();
  }

  @Output() irAModificarPacienteEmiter = new EventEmitter<any>();

  irAModificarPaciente(pacienteSeleccionado:any){
    this.irAModificarPacienteEmiter.emit(pacienteSeleccionado);
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
