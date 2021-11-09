import { AfterViewInit, Compiler,ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AuthenticationService } from 'src/app/_services';
import { AdministradorNavigationService } from 'src/app/_services/administrador_services/administrador.navigation.service';
import { AuthenticacionAdministradorService } from 'src/app/_services/login_services/authentication-administrador.service';
import { CrearAdministradorComponent } from './Administradores/crear-administrador/crear-administrador.component';
import { CrearEventoComponent } from './Eventos/crear-evento/crear-evento.component';
import { GestionEventosComponent } from './Eventos/gestion-eventos/gestion-eventos.component';
import { GestionAdministradorComponent } from './gestion-administrador/gestion-administrador.component';
import { GestionPacientesComponent } from './gestion-pacientes/gestion-pacientes.component';
import { GestionPsicologoComponent } from './gestion-psicologo/gestion-psicologo.component';
import { CrearPacienteComponent } from './Pacientes/crear-paciente/crear-paciente.component';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';
import { CrearPsicologoComponent } from './Psicologo/crear-psicologo/crear-psicologo.component';

@Component({
  selector: 'app-cuerpo-administrador',
  templateUrl: './cuerpo-administrador.component.html',
  styleUrls: ['./cuerpo-administrador.component.scss']
})
export class CuerpoAdministradorComponent implements OnInit,AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  @ViewChild('sidenav') sidenav: MatSidenav|any;
  constructor(private compiler: Compiler,
              private administradorNavegacionService: AdministradorNavigationService,private componentFactoryResolver: ComponentFactoryResolver,private autenticacionService:AuthenticacionAdministradorService,private router:Router) { }

  ngAfterViewInit(): void {
    this.sidenav.close();
      this.administradorNavegacionService.asObservableIrVerPerfil().subscribe(() => { 
        this.rendeVerPerfilAdministrador();
    });
    this.renderlistarPacientes();

  }
  ngOnInit() {
    this.administradorNavegacionService.SideNavAsObservable().subscribe(() => { 
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
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(GestionPacientesComponent));

    ref.instance.irACrearPacienteEmiter.subscribe(() => {
      this.idPacienteSeleccionado=null;
      this.renderCrearPacientes();

    });
    ref.instance.irAModificarPacienteEmiter.subscribe((idPacienteSeleccionado:any) => {
      this.idPacienteSeleccionado=idPacienteSeleccionado;
      this.renderCrearPacientes();
    });
    
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearPacientes(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(CrearPacienteComponent));

    ref.instance.idPacienteSeleccionado = this.idPacienteSeleccionado;
    ref.instance.irAListarPacienteEmiter.subscribe(() => {
      this.renderlistarPacientes();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public rendeVerPerfilAdministrador(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(PerfilAdministradorComponent));
    ref.changeDetectorRef.detectChanges();
  }
  public renderlistarPsicologos():void{
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(GestionPsicologoComponent));
    ref.instance.irACrearPsicologoEmiter.subscribe(()=>{
      this.renderCrearPsicologos();
    })
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearPsicologos():void{
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(CrearPsicologoComponent));
    ref.instance.irAListarPsicologoEmiter.subscribe(()=>{
      this.renderlistarPsicologos();
    })
    console.log(ref);
    ref.changeDetectorRef.detectChanges();
   
  }
  public renderlistarAdministrador(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(GestionPsicologoComponent));
    ref.instance.irACrearAdministradorEmiter.subscribe(() =>{
      this.renderCrearAdministrador();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearAdministrador(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(CrearAdministradorComponent));
    ref.instance.irAListarAdministardorEmiter.subscribe(() =>{
      this.renderlistarAdministrador();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderGestionEventos(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(GestionEventosComponent));

    ref.instance.irACrearEventoEmiter.subscribe(() =>{
      this.renderCrearEventos();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearEventos(): void {
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(CrearEventoComponent));

    ref.instance.irAListarEventoEmiter.subscribe(() =>{
      this.renderGestionEventos();
    });
    ref.changeDetectorRef.detectChanges();
  }
  mostrarPacientes(){
    this.renderlistarPacientes();
  }
  mostrarPsicologos(){
    this.renderlistarPsicologos();
  }
  logout(){
   
    this.autenticacionService.logout()
    this.router.navigate(['/login']);
    
  }
}
