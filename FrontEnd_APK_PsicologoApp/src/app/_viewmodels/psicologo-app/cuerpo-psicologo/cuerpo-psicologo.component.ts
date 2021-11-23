import { AfterViewInit, Compiler,ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AuthenticationService } from 'src/app/_services';
import { AuthenticacionPsicologoService } from 'src/app/_services/login_services/authentication-psicologo.service';
import { PsicologoNavigationService } from 'src/app/_services/psicologo_services/psicologo.navigation.service';
import { SidenavService } from 'src/app/_services/sidenavService';
import { PerfilPsicologoComponent } from './perfil-psicologo/perfil-psicologo.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ResumenDeLaAgendaVirtualComponent } from './pacientes/resumen-de-la-agenda-virtual/resumen-de-la-agenda-virtual.component';
import { ResultadosPruebasDeDesarolloCognitivoComponent } from './pacientes/resultados-pruebas-de-desarollo-cognitivo/resultados-pruebas-de-desarollo-cognitivo.component';

@Component({
  selector: 'app-cuerpo-psicologo',
  templateUrl: './cuerpo-psicologo.component.html',
  styleUrls: ['./cuerpo-psicologo.component.scss']
})
export class CuerpoPsicologoComponent implements OnInit,AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  @ViewChild('sidenav') sidenav: MatSidenav|any;
  constructor(private compiler: Compiler,private componentFactoryResolver: ComponentFactoryResolver,private psicologoNavegacionService:PsicologoNavigationService,private autenticacionService:AuthenticacionPsicologoService,private router:Router) { }
  ngAfterViewInit(): void {
    this.sidenav.close();
    this.renderPerfilPsicologo();
    this.psicologoNavegacionService.asObservableIrVerPerfil().subscribe(() => { 
        this.renderPerfilPsicologo();
       // this.renderlistarPacientes();
    });
  }
  ngOnInit() {
    this.psicologoNavegacionService.SideNavAsObservable().subscribe(() => { 
                if(this.sidenav.opened) {  
                    this.sidenav.close();
                }
                else{
                    this.sidenav.open();
                }
        });
  
}
public idPacienteSeleccionado:any=null;

  
public renderlistarPacientes(): void {
  this.myRef.clear();
  const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(PacientesComponent));
  ref.instance.irResumen.subscribe((idPaciente:any) => {
    this.renderResumenAgenda(idPaciente);
  });
  ref.instance.irResultados.subscribe((idPaciente:any) => {
    this.renderResultadosPruebasCognitivas(idPaciente);
  });
  ref.changeDetectorRef.detectChanges();

}

  public renderPerfilPsicologo(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(PerfilPsicologoComponent));
    
    ref.changeDetectorRef.detectChanges();
    
  }
  public renderResumenAgenda(idPaciente:any): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(ResumenDeLaAgendaVirtualComponent));
    ref.instance.idPaciente=idPaciente;
    ref.instance.irPacientes.subscribe(() => {
     
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderResultadosPruebasCognitivas(idPaciente:any): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(ResultadosPruebasDeDesarolloCognitivoComponent));
    ref.instance.idPaciente=idPaciente;
    ref.instance.irPacientes.subscribe(() => {
     
    });
    ref.changeDetectorRef.detectChanges();
  }
  
  mostrarPacientes(){
    this.renderlistarPacientes();
  }
  logout(){
    this.autenticacionService.logout()
    this.router.navigate(['/login']);
  }
}

