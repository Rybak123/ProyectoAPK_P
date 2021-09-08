import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SidenavService {
    public sideNavToggleSubject: BehaviorSubject<123> = new BehaviorSubject(123);

    constructor() { } 

    public toggle() { 
        return this.sideNavToggleSubject.next(123);
    } 
}