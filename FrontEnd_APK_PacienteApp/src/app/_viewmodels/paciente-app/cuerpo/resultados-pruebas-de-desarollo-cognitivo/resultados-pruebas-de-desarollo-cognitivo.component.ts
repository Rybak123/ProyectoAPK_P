import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/_services/paciente-service';

@Component({
  selector: 'app-resultados-pruebas-de-desarollo-cognitivo',
  templateUrl: './resultados-pruebas-de-desarollo-cognitivo.component.html',
  styleUrls: ['./resultados-pruebas-de-desarollo-cognitivo.component.scss']
})
export class ResultadosPruebasDeDesarolloCognitivoComponent implements OnInit {

  resultadorPruebasDesarolloCognitivo:any=[];
  constructor(private pacienteService:PacienteService) { }
  usuario:any;
  ngOnInit(): void {
    var pacienteInfo=localStorage.getItem('currentUser');
    if(pacienteInfo==null){
        pacienteInfo="null";
        throw console.error("Usuario no encontrado");
    }
    this.usuario=JSON.parse(pacienteInfo);
    this.pacienteService.leerPruebasDeDesarolloCognitivo(this.usuario.id).then((resutlado:any)=>{
    this.resultadorPruebasDesarolloCognitivo=resutlado;
   })
  }
  convertirDirferenciaFechas(fechaIn:any,fechaFin:any){
    var today :any= new Date(fechaIn);
    var Christmas :any= new Date(fechaFin);
    var diffMs :any= (Christmas - today); // milliseconds between now & Christmas
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    var diffsec = Math.round(((diffMs % 86400000) % 3600000) / 1000); // minutes
    return (diffHrs + ":" + diffMins + ":"+diffsec);
  }
  convertirFecha(fecha:any){
    return new Date(fecha).toLocaleString();
  }

}
