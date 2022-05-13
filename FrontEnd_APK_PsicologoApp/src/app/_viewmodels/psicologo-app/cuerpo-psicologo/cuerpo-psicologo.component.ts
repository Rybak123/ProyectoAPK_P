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

@Component({
  selector: 'app-cuerpo-psicologo',
  templateUrl: './cuerpo-psicologo.component.html',
  styleUrls: ['./cuerpo-psicologo.component.scss']
})
export class CuerpoPsicologoComponent implements OnInit,AfterViewInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef:any
  @ViewChild('sidenav') sidenav: MatSidenav|any;
  constructor(private compiler: Compiler,private psicologoNavegacionService:PsicologoNavigationService,private autenticacionService:AuthenticacionPsicologoService,private router:Router) { }
  ngAfterViewInit(): void {
    this.sidenav.close();
    this.renderPerfilPsicologo();
    this.psicologoNavegacionService.asObservableIrVerPerfil().subscribe(() => { 
        this.renderPerfilPsicologo();
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
  public renderPerfilPsicologo(): void {
    const componentModule = this.compiler.compileModuleAndAllComponentsSync(AppModule);
    const factory = componentModule.componentFactories.find(c => c.componentType === PerfilPsicologoComponent);    
    this.myRef.clear();
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  logout(){
    this.autenticacionService.logout()
    this.router.navigate(['/login']);
  }
}

