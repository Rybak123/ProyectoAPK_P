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
              private administradorNavegacionService: AdministradorNavigationService,private autenticacionService:AuthenticacionAdministradorService,private router:Router) { }

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
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === GestionPacientesComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);

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
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === CrearPacienteComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);

    ref.instance.idPacienteSeleccionado = this.idPacienteSeleccionado;
    ref.instance.irAListarPacienteEmiter.subscribe(() => {
      this.renderlistarPacientes();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public rendeVerPerfilAdministrador(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === PerfilAdministradorComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  public renderlistarPsicologos():void{
    const componentModule=this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory=componentModule.componentFactories.find(c=>c.componentType===GestionPsicologoComponent);
    this.myRef.clear();
    const ref=this.myRef.createComponent(factory);
    ref.instance.irACrearPsicologoEmiter.subscribe(()=>{
      this.renderCrearPsicologos();
    })
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearPsicologos():void{
    const componentModule=this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory=componentModule.componentFactories.find(c=>c.componentType===CrearPsicologoComponent);
    this.myRef.clear();
    const ref=this.myRef.createComponent(factory);
    ref.instance.irAListarPsicologoEmiter.subscribe(()=>{
      this.renderlistarPsicologos();
    })
    console.log(ref);
    ref.changeDetectorRef.detectChanges();
   
  }
  public renderlistarAdministrador(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === GestionAdministradorComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.irACrearAdministradorEmiter.subscribe(() =>{
      this.renderCrearAdministrador();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearAdministrador(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === CrearAdministradorComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.irAListarAdministardorEmiter.subscribe(() =>{
      this.renderlistarAdministrador();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderGestionEventos(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === GestionEventosComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);

    ref.instance.irACrearEventoEmiter.subscribe(() =>{
      this.renderCrearEventos();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderCrearEventos(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === CrearEventoComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);

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
