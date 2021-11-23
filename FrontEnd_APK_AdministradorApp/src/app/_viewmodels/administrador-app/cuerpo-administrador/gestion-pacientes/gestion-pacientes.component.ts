import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PacienteService } from 'src/app/_services/paciente-service';
import { first } from 'rxjs/operators';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
import { Psicologo } from 'src/app/_models/psicologo_model/psicologo';
import { PsicologoService } from 'src/app/_services/psicologo_services/psicologo-service';

@Component({
  selector: 'app-gestion-pacientes',
  templateUrl: './gestion-pacientes.component.html',
  styleUrls: ['./gestion-pacientes.component.scss']
})
export class GestionPacientesComponent implements OnInit {
  //array de usuarios
  public pacientes!:Paciente[];
  public psicologos!:Psicologo[];
  public psicologosHabilitado:any=[];
  public isDisabling = false;
  public pacienteActual:any;
  public idpacienteActual:any;

  constructor(private gestionPaciente: PacienteService, private gestionPsicologo:PsicologoService) { }
  ngOnInit(): void {
    this.listarPacientes();
    console.log(this.pacientes);
    this.listarPsicologo();
  console.log(this.psicologos);
  
  }
  private listarPacientes() {
    this.gestionPaciente.listarPacientes()
        .pipe(first())
        .subscribe((pacientes:any) => this.pacientes = pacientes);
  }
  
  private listarPsicologo(){
  this.gestionPsicologo.listarPsicologo()
  .pipe()
  .subscribe((psicologo:any)=>this.psicologos=psicologo.resultado).add(()=>{
    this.psicologos.forEach((psicologo:any)=>{
      if(psicologo.estado==true)
      {
        this.psicologosHabilitado.push(psicologo);
      }
    })
  });
}
  nombrePsicologo(idPsicologo:any){
    var nombrePsicologoEncontrado="";
    this.psicologos.forEach((psicologos)=>{
      if(psicologos.id==idPsicologo)
      {
        nombrePsicologoEncontrado=psicologos.nombres;
      }
     
    })
    return nombrePsicologoEncontrado;
  }
  actualizarPsicologo(pacientes:any,selectvalue:any){
    var list:any = document.getElementsByClassName("selects");
    var selected:any;
    for(var i=0;i<list.length;i++){
      if(list[i].id==pacientes.id){
         selected=list[i];
      }

    }

    var value = selected.options[selected.selectedIndex].value;
    var text =selected.options[selected.selectedIndex].text; 
    console.log(value);
    console.log(text);
    //list.forEach((element:any) => {
    //  
    //});
   
    console.log(list);
    if(selectvalue!=""){
      pacientes.idPsicologo=value;
       this.gestionPaciente.modificarPaciente(pacientes)
       .pipe(first())
       .subscribe(() => {
         alert("Datos modificados");
       }).add(() => {
        this.listarPacientes();
       });
    }
   
  }
  verPacientes(){
    console.log(this.pacientes);
  }
  visualizarPaciente(pacienteSeleccionado:any){
    this.pacienteActual=pacienteSeleccionado;
  }
  deshabilitarPaciente(idPacienteSeleccionado:any){

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
