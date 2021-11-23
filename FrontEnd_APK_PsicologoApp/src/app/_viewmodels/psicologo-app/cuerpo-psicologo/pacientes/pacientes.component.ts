import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
import { PacienteService } from 'src/app/_services/paciente-service';
import { first } from 'rxjs/operators';
import { Psicologo } from 'src/app/_models/psicologo_model/psicologo';
import { PsicologoService } from 'src/app/_services/psicologo_services/psicologo-service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  public pacientes!:Paciente[];
  public psicologos!:Psicologo[];
  public psicologosid:any=[];
  public usuarios:any;
  public ispsico =false;
  constructor(private gestionPaciente: PacienteService,private gestionPsicologo:PsicologoService) { }
  @Output() irResumen= new EventEmitter<any>();
  irAResumenAgenda(PacienteId:any){
    this.irResumen.emit(PacienteId);
  }
  @Output() irResultados= new EventEmitter<any>();
  irAResultados(PacienteId:any){
    this.irResultados.emit(PacienteId);
  }
  ngOnInit(): void {
    var pacienteInfo=localStorage.getItem('currentUser');
    if(pacienteInfo==null){
        pacienteInfo="null";
        throw console.error("Paciente no encontrado");
    }
    var usuario:any =JSON.parse(pacienteInfo).resultado;
   // console.log(usuario);

    this.listarPacientes(usuario);
  //  console.log(this.pacientes);
  }
  private listarPacientes(usuario:any) 
   {
    this.usuarios=usuario;
    console.log(this.usuarios._id);
    this.gestionPaciente.listarPacientes()
        .pipe()
        .subscribe((paciente:any) => this.pacientes = paciente).add(()=>{
  
          this.pacientes.forEach((paciente:any)=>{
            console.log(paciente.idPsicologo);
           
            if(paciente.idPsicologo==this.usuarios._id)
            {
              this.psicologosid.push(paciente);
            }
          })
         
        });
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
