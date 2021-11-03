import { AfterViewInit, Compiler, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { PruebaGeneralLamina10Component } from '../prueba-general-lamina10/prueba-general-lamina10.component';
import { PruebaGeneralLamina11Component } from '../prueba-general-lamina11/prueba-general-lamina11.component';
import { PruebaGeneralLamina12Component } from '../prueba-general-lamina12/prueba-general-lamina12.component';
import { PruebaGeneralLamina13Component } from '../prueba-general-lamina13/prueba-general-lamina13.component';
import { PruebaGeneralLamina14Component } from '../prueba-general-lamina14/prueba-general-lamina14.component';
import { PruebaGeneralLamina15Component } from '../prueba-general-lamina15/prueba-general-lamina15.component';
import { PruebaGeneralLamina16Component } from '../prueba-general-lamina16/prueba-general-lamina16.component';
import { PruebaGeneralLamina2Component } from '../prueba-general-lamina2/prueba-general-lamina2.component';
import { PruebaGeneralLamina3Component } from '../prueba-general-lamina3/prueba-general-lamina3.component';
import { PruebaGeneralLamina4Component } from '../prueba-general-lamina4/prueba-general-lamina4.component';
import { PruebaGeneralLamina5Component } from '../prueba-general-lamina5/prueba-general-lamina5.component';
import { PruebaGeneralLamina6Component } from '../prueba-general-lamina6/prueba-general-lamina6.component';
import { PruebaGeneralLamina7Component } from '../prueba-general-lamina7/prueba-general-lamina7.component';
import { PruebaGeneralLamina8Component } from '../prueba-general-lamina8/prueba-general-lamina8.component';
import { PruebaGeneralLamina9Component } from '../prueba-general-lamina9/prueba-general-lamina9.component';
import { PruebaGeneralResultadosComponent } from '../prueba-general-resultados/prueba-general-resultados.component';
import { PruebaGeneralComponent } from '../prueba-general/prueba-general.component';

@Component({
  selector: 'app-inicio-prueba-marco',
  templateUrl: './inicio-prueba-marco.component.html',
  styleUrls: ['./inicio-prueba-marco.component.scss']
})
export class InicioPruebaMarcoComponent implements OnInit,AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  constructor(private compiler: Compiler) { }
  ngOnInit(): void {
  
  }     
  ngAfterViewInit(): void {
    this.start();
    this.renderActividad1();

  }
  renderActividad1(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad2();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad2(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina2Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad3();
   });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad3(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina3Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad4();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad4(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina4Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad5();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad5(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina5Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad6();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad6(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina6Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad7();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad7(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina7Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad8();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad8(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina8Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad9();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad9(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina9Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad10();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad10(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina10Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad11();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad11(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina11Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad12();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad12(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina12Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad13();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad13(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina13Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad14();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad14(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina14Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad15();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad15(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina15Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividad16();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividad16(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralLamina16Component);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.instance.emiterEvent.subscribe(() => {
      this.renderActividadResultado();
      this.stop();
    });
    ref.changeDetectorRef.detectChanges();
  }
  renderActividadResultado(){
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule)
    const factory = componentModule.componentFactories.find(c => c.componentType === PruebaGeneralResultadosComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  
  public hora:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;
  public horaString:String = "00";
  public minutosString:String = "00";
  public segundosString:String = "00";
  public contador:any;
  start(){ 
      if(this.contador == undefined){ 
        this.contador = setInterval(()=>{ 
          this.segundos += 1;
          this.segundosString=('0' + this.segundos).slice(-2);
          if(this.segundos == 60){ 
            this.segundos = 0;
            this.minutos +=1;
            this.minutosString=('0' + this.minutos).slice(-2);
            if(this.minutos == 60){ 
              this.minutos = 0;
              this.hora +=1;
              this.horaString=('0' + this.horaString).slice(-2);
              if(this.hora = 24){ 
                this.hora = 0;
              }
            }
          }
        }
        ,1000);
      }        
  }
  stop(){ 
    clearInterval(this.contador);
    this.contador = null;
  }
}
