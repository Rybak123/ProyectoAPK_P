import { AfterViewInit, Compiler, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { PruebaGeneralLamina2Component } from '../prueba-general-lamina2/prueba-general-lamina2.component';
import { PruebaGeneralLamina3Component } from '../prueba-general-lamina3/prueba-general-lamina3.component';
import { PruebaGeneralLamina4Component } from '../prueba-general-lamina4/prueba-general-lamina4.component';
import { PruebaGeneralLamina5Component } from '../prueba-general-lamina5/prueba-general-lamina5.component';
import { PruebaGeneralLamina6Component } from '../prueba-general-lamina6/prueba-general-lamina6.component';
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
