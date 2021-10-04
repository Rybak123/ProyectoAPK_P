import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable()
export class NavigationService {
    private menuIsOpen$ : Subject<null>;
    private obsernverIrCrearLibro : Subject<null>;
    constructor() { 
        this.menuIsOpen$ = new Subject<null>();
        this.obsernverIrCrearLibro=new Subject<null>();
    }
    public iraVerLibros() {
        console.log("verlibros");
        this.menuIsOpen$.next();
    }
    public iraCrearLibro() {
        console.log("crearLibros");
        this.obsernverIrCrearLibro.next();
    }
    
    public asObservable() 
    {
        return this.menuIsOpen$.asObservable();
    }
    public asObservableIrCrearLibro() 
    {
        return this.obsernverIrCrearLibro.asObservable();
    }

}
