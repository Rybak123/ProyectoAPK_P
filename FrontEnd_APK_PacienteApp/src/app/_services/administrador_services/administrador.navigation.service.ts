import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable()
export class AdministradorNavigationService {
    private menuSideNavOpen : Subject<null>;
    private obsernverIrCrearLibro : Subject<null>;
    private obsernverIrPerfil : Subject<null>;
    constructor() { 
        this.menuSideNavOpen = new Subject<null>();
        this.obsernverIrCrearLibro=new Subject<null>();
        this.obsernverIrPerfil=new Subject<null>();
    }
    public iraVerPerfil() {
        console.log("verlibros");
        this.obsernverIrPerfil.next();
    }

    public iraCrearLibro() {
        console.log("crearLibros");
        this.obsernverIrCrearLibro.next();
    }
    

    public asObservableIrCrearLibro() 
    {
        return this.obsernverIrCrearLibro.asObservable();
    }
    public asObservableIrVerPerfil() 
    {
        return this.obsernverIrPerfil.asObservable();
    }
    public toggle() {
        this.menuSideNavOpen.next();
    }

    public SideNavAsObservable() 
    {
        return this.menuSideNavOpen.asObservable();
    }
}
