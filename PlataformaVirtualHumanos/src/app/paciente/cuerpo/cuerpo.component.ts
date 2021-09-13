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

import { AdDirective } from '../../_helpers/ad.directive';
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

  @ViewChild('sidenav') sidenav: MatSidenav|any;
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  constructor(private sidenavService: SidenavService,private componentFactoryResolver: ComponentFactoryResolver) 
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

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ControlDeSuenoComponent);
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
}



