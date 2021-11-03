import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable()
export class SidenavService {
    private menuIsOpen$ : Subject<boolean>;

    private notifiacionesToggle : Subject<null>;


    private menuIsOpen: boolean = false;
    constructor() { 
        this.menuIsOpen$ = new Subject<boolean>();
        this.notifiacionesToggle= new Subject<null>();
    }


    public open() {
            if(!this.menuIsOpen) {
                this.menuIsOpen = true;
                this.menuIsOpen$.next(false);
            }
    }
    /**
     * Both silence open and close is use by navbar output, to silence switch internal flag.
     **/
    public silenceOpen() {
        this.menuIsOpen = true;
    }
    public silenceClose() {
        this.menuIsOpen = false;
    }

    /**
    * If menu is close, let open it
    **/
    public close() {
            if(this.menuIsOpen) {
                this.menuIsOpen = false;
                this.menuIsOpen$.next(false);
            }
    }

    public toggle() {
        this.menuIsOpen = !this.menuIsOpen;
        this.menuIsOpen$.next(this.menuIsOpen);
    }

    public asObservable() 
    {
        return this.menuIsOpen$.asObservable();
    }
    public abrirNotificaciones(){
        this.notifiacionesToggle.next();
    }
    public asObservableNotificaciones() 
    {
        return this.notifiacionesToggle.asObservable();
    }
}
