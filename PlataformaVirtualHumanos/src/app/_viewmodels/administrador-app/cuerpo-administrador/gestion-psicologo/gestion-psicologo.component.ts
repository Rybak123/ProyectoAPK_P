import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { Psicologo } from 'src/app/_models/psicologo_model/psicologo';
import { PsicologoService } from 'src/app/_services/psicologo_services/psicologo-service';


@Component({
  selector: 'app-gestion-psicologo',
  templateUrl: './gestion-psicologo.component.html',
  styleUrls: ['./gestion-psicologo.component.scss']
})
export class GestionPsicologoComponent implements OnInit {
public psicologos!:Psicologo[]; //indica que el atributo puede ser nulo
public isDeleting = false;
public isHabilitar =false;
public psicologoActual:any;
public idpsicologoActual:any;
  constructor(private gestionPsicologo:PsicologoService) { }

  ngOnInit(): void {
    this.listarPsicologo();
    console.log(this.psicologos);
    }
    private listarPsicologo(){
    this.gestionPsicologo.listarPsicologo()
    .pipe()
    .subscribe((psicologo:any)=>this.psicologos=psicologo.resultado);
  }
  
  mostrarPeticion(){
    console.log(this.psicologos)
  }
  visualizarPsicologo(psicologoSeleccionado:any){
    console.log(psicologoSeleccionado);
    this.psicologoActual=psicologoSeleccionado;
  }
  deshabilitarPsicologo(idPsicologoSeleccionado:any){
    this.isDeleting=true;
    this.gestionPsicologo.deshabilitarPsicologo(idPsicologoSeleccionado)
            .pipe(first())
            .subscribe(() => this.listarPsicologo())
            .add(()=>this.isDeleting=false);
  }
  habilitarPsicologo(idPsicologoSeleccionado:any){
    this.isHabilitar=true;
    this.gestionPsicologo.habilitarPsicologo(idPsicologoSeleccionado)
            .pipe(first())
            .subscribe(() => this.listarPsicologo())
            .add(()=>this.isHabilitar=false);
  }
  actualizarPsicologo(){
    
  }

  @Output() irACrearPsicologoEmiter = new EventEmitter();

  irACrearPsicologo(){
    this.irACrearPsicologoEmiter.emit();
  }

  @Output() irAEditarPsicologoEmiter = new EventEmitter();

  irAEditarPsicologo(){
    this.irAEditarPsicologoEmiter.emit();
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
