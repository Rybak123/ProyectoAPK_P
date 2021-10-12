import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PacienteVO } from '../_models';

import{ GlobalConstants } from '../../app/global-constants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<PacienteVO|null>;
    public currentUser: Observable<PacienteVO|null>;

    constructor(private http: HttpClient) {
        var usuario=localStorage.getItem('currentUser');
        if(usuario==null){
            usuario="null";
        }
        this.currentUserSubject = new BehaviorSubject<PacienteVO|null>(JSON.parse(usuario));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): PacienteVO|null {
        return this.currentUserSubject.value;
    }

    login(correoElectronico:any, contrasena:any) {
        return this.http.post<any>( `${GlobalConstants.apiURL}/paciente/autenticacion`, { correoElectronico, contrasena })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
  
        this.currentUserSubject.next(null);
    }
}