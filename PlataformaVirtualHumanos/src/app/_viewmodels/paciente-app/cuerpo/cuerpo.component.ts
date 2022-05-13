//import { VerCancionesComponent } from './../paciente/cuerpo/misCanciones/ver-canciones/ver-canciones.component';
//import { CrearCancionesComponent } from './misCanciones/crear-canciones/crear-canciones.component';
import { Component, ElementRef, OnInit,ViewChild, ComponentFactoryResolver, Compiler, AfterViewInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ViewEncapsulation,Directive, ViewContainerRef  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../_services/sidenavService';
import { ControlDeEstudioComponent } from '../cuerpo/control-de-estudio/control-de-estudio.component';
import { ControlDeSuenoComponent } from '../cuerpo/control-de-sueno/control-de-sueno.component';
import { ControlDeAnimoComponent } from '../cuerpo/control-de-animo/control-de-animo.component';
import { ControlDeConsumoDeAguaComponent } from '../cuerpo/control-de-consumo-de-agua/control-de-consumo-de-agua.component';
import { ControlDeEnergiaComponent } from '../cuerpo/control-de-energia/control-de-energia.component';
import { AuthenticationService } from '../../../_services';
import { AdDirective } from '../../../_helpers/ad.directive';
import { Router } from '@angular/router';


// paso 1  importar las clases de los componentes
import { CrearLibroComponent } from '../cuerpo/misLibros/crear-libro/crear-libro.component';
import { VerLibrosComponent } from '../cuerpo/misLibros/ver-libros/ver-libros.component';
import { CrearCancionesComponent } from '../cuerpo/misCanciones/crear-canciones/crear-canciones.component';
import { VerCancionesComponent } from '../cuerpo/misCanciones/ver-canciones/ver-canciones.component';
import { VerCancionesModule } from './misCanciones/ver-canciones/ver-canciones.module';
import { VerLibrosModule } from './misLibros/ver-libros/ver-libros.module';
import { CrearMetasPersonalesComponent } from './metasPersonales/crear-metas-personales/crear-metas-personales.component';
import { CrearMetasSocialesComponent } from './metasSociales/crear-metas-sociales/crear-metas-sociales.component';

import { VerMetasPersonalesComponent } from './metasPersonales/ver-metas-personales/ver-metas-personales.component';
import { CrearFavoritoComponent } from './misFavoritos/crear-favorito/crear-favorito.component';
import { VerFavoritosComponent } from './misFavoritos/ver-favoritos/ver-favoritos.component';
import { CalificarMesComponent } from './calificar-mes/calificar-mes.component';

import { AppModule } from 'src/app/app.module';
import { ResumenDeLaAgendaVirtualComponent } from './resumen-de-la-agenda-virtual/resumen-de-la-agenda-virtual.component';
import { NavigationService } from '../../../_services/paciente_services/navigation_services/navigationService';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss'],
})
export class CuerpoComponent implements OnInit,AfterViewInit {


  factoryControlDeEstudio:any;
  factoryControlDeAnimo:any;
  factoryControlDeConsumoDeAgua:any;
  factoryControlDeEnergia:any;
  factoryControlDeSueno:any;

    // Paso 2 crear un atributo de clase de la Imagen de los componentes
  factoryCrearLibro:any;
  factoryVerLibro:any;
  factoryCrearCancion:any;
  factoryVerCancion:any;
  factoryCrearMetasPersonales:any;
  factoryCrearMetasSociales:any;
  

  @ViewChild('sidenav') sidenav: MatSidenav|any;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  
  constructor(private compiler: Compiler,private sidenavService: SidenavService,
    private componentFactoryResolver: ComponentFactoryResolver,private router: Router,
    private authenticationService: AuthenticationService,
    private navigationServices:NavigationService) 
  {

  }

  public currentComponent = null;

  public renderControlDeEstudio(): void {
    if(this.factoryControlDeEstudio==null){
      this.factoryControlDeEstudio = this.componentFactoryResolver.resolveComponentFactory(ControlDeEstudioComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryControlDeEstudio);
    ref.changeDetectorRef.detectChanges();
  }

  public renderControlDeSueno(): void {
    if(this.factoryControlDeSueno==null){
      this.factoryControlDeSueno = this.componentFactoryResolver.resolveComponentFactory(ControlDeSuenoComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryControlDeSueno);
    ref.changeDetectorRef.detectChanges();
  }
  public renderControlDeEnergia(): void {
    if(this.factoryControlDeEnergia==null){
      this.factoryControlDeEnergia = this.componentFactoryResolver.resolveComponentFactory(ControlDeEnergiaComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryControlDeEnergia);
    ref.changeDetectorRef.detectChanges();
  }
  public renderControlDeAnimo(): void {
    if(this.factoryControlDeAnimo==null){
      this.factoryControlDeAnimo = this.componentFactoryResolver.resolveComponentFactory(ControlDeAnimoComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryControlDeAnimo);
    ref.changeDetectorRef.detectChanges();
  }
  public renderControlDeConsumoDeAgua(): void {
    if(this.factoryControlDeConsumoDeAgua==null){
      this.factoryControlDeConsumoDeAgua = this.componentFactoryResolver.resolveComponentFactory(ControlDeConsumoDeAguaComponent);
    }
    
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryControlDeConsumoDeAgua);
    ref.changeDetectorRef.detectChanges();
  }


  public renderCrearLibro(): void {
    // Paso 3 crear la imagen si no existe y asignaro a la etiqueta de componentes dinamicos
    if(this.factoryCrearLibro==null){
      this.factoryCrearLibro = this.componentFactoryResolver.resolveComponentFactory(CrearLibroComponent);
    }
    
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryCrearLibro);
  
    ref.instance.volverAVerLibroEmiter.subscribe(() => {
      this.renderVerLibro();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public renderVerLibro(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === VerLibrosComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.irACrearLibroEmiter.subscribe(() => {
      this.renderCrearLibro();
    });
    ref.changeDetectorRef.detectChanges();
  }
  // MIS CANCIONES 
  public renderCrearCancion(): void {
    // Paso 3 crear la imagen si no existe y asignaro a la etiqueta de componentes dinamicos
    if(this.factoryCrearCancion==null){
      this.factoryCrearCancion = this.componentFactoryResolver.resolveComponentFactory(CrearCancionesComponent);
    }
    
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryCrearCancion);
    ref.instance.irAVerCancionesEventEmiter.subscribe(() => {
      this.renderVerCancion();
    });
    ref.changeDetectorRef.detectChanges();
    
  }
  public renderVerCancion(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === VerCancionesComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.irACrearCancionesEventEmiter.subscribe(() => {
      this.renderCrearCancion();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public render_crearMetasPersonales(): void {
    if(this.factoryCrearMetasPersonales==null){
      this.factoryCrearMetasPersonales = this.componentFactoryResolver.resolveComponentFactory(CrearMetasPersonalesComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryCrearMetasPersonales);
    ref.instance.irAVerMetasPersonalesEventEmiter.subscribe(() => {
      this.render_verMetasPersonales();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public render_crearMetasSociales(): void {
    if(this.factoryCrearMetasSociales==null){
      this.factoryCrearMetasSociales = this.componentFactoryResolver.resolveComponentFactory(CrearMetasSocialesComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryCrearMetasSociales);
    ref.changeDetectorRef.detectChanges();
  }
  public render_verMetasPersonales(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === VerMetasPersonalesComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.irACrearMetasPersonalesEventEmiter.subscribe(() => {
      this.render_crearMetasPersonales();
    });
    ref.changeDetectorRef.detectChanges();
  }
  public render_crearFavorito(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === CrearFavoritoComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  public render_verFavoritos(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === VerFavoritosComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  public render_calificarMes(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === CalificarMesComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  public render_ResumenAgenda(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === ResumenDeLaAgendaVirtualComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  public renderVerPerfilPaciente(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === PerfilPacienteComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {

    this.navigationServices.asObservableIrVerPerfil().subscribe(() => { 
      console.log("asdasd");
      this.renderVerPerfilPaciente();
    });

    this.sidenav.close();
    const factory = this.componentFactoryResolver.resolveComponentFactory(ControlDeConsumoDeAguaComponent);
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
      this.sidenavService.asObservable().subscribe((isOpen: boolean) => { 
                  if(this.sidenav.opened) {  
                      this.sidenav.close();
                  }
                  else{
                      this.sidenav.open();
                  }
          });
    
  }

  onOpenedChange() {
      this.sidenavService.silenceOpen();
  }
  onClosedChange() {
      this.sidenavService.silenceClose();
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}



