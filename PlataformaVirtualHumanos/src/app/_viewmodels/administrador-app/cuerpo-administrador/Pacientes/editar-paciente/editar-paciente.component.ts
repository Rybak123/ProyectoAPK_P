import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() irAListarPacienteEmiter = new EventEmitter();

  irAListarPaciente(){
    this.irAListarPacienteEmiter.emit();
  }
}
