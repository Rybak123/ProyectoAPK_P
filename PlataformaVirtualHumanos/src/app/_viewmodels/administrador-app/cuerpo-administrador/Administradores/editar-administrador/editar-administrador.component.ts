import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-administrador',
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.scss']
})
export class EditarAdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() irAListarAdministardorEmiter = new EventEmitter();
  irAListarAdministrador(){
    this.irAListarAdministardorEmiter.emit();
  }

}
