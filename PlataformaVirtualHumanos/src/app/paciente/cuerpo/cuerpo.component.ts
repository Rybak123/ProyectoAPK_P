//import { VerCancionesComponent } from './../paciente/cuerpo/misCanciones/ver-canciones/ver-canciones.component';
//import { CrearCancionesComponent } from './misCanciones/crear-canciones/crear-canciones.component';
import { Component, ElementRef, OnInit,ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ViewEncapsulation,Directive, ViewContainerRef  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../_services/sidenavService';
import { ControlDeEstudioComponent } from '../cuerpo/control-de-estudio/control-de-estudio.component';
import { ControlDeSuenoComponent } from '../cuerpo/control-de-sueno/control-de-sueno.component';
import { ControlDeAnimoComponent } from '../cuerpo/control-de-animo/control-de-animo.component';
import { ControlDeConsumoDeAguaComponent } from '../cuerpo/control-de-consumo-de-agua/control-de-consumo-de-agua.component';
import { ControlDeEnergiaComponent } from '../cuerpo/control-de-energia/control-de-energia.component';
import { AuthenticationService } from '../../_services';
import { AdDirective } from '../../_helpers/ad.directive';
import { Router } from '@angular/router';


// paso 1  importar las clases de los componentes
import { CrearLibroComponent } from '../cuerpo/misLibros/crear-libro/crear-libro.component';
import { VerLibrosComponent } from '../cuerpo/misLibros/ver-libros/ver-libros.component';
import { CrearCancionesComponent } from '../cuerpo/misCanciones/crear-canciones/crear-canciones.component';
import { VerCancionesComponent } from '../cuerpo/misCanciones/ver-canciones/ver-canciones.component';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss'],
})
export class CuerpoComponent implements OnInit {


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
  

  @ViewChild('sidenav') sidenav: MatSidenav|any;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  
  constructor(private sidenavService: SidenavService,private componentFactoryResolver: ComponentFactoryResolver,private router: Router,
    private authenticationService: AuthenticationService) 
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
    ref.changeDetectorRef.detectChanges();
  }
  public renderVerLibro(): void {
    if(this.factoryVerLibro==null){
      this.factoryVerLibro = this.componentFactoryResolver.resolveComponentFactory(VerLibrosComponent);
    }
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryVerLibro);
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
    ref.changeDetectorRef.detectChanges();
  }
  public renderVerCancion(): void {
    // Paso 3 crear la imagen si no existe y asignaro a la etiqueta de componentes dinamicos
    if(this.factoryVerCancion==null){
      this.factoryVerCancion = this.componentFactoryResolver.resolveComponentFactory(VerCancionesComponent);
    }
    
    this.myRef.clear();
    const ref = this.myRef.createComponent(this.factoryVerCancion);
    ref.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
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



