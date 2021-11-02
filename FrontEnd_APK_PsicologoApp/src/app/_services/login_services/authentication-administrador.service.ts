import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{ GlobalConstants } from '../../../app/global-constants';
import { Paciente } from 'src/app/_models/paciente_model/paciente';

@Injectable({ providedIn: 'root' })
export class AuthenticacionAdministradorService {
    private currentUserSubject: BehaviorSubject<Paciente|null>;
    public currentUser: Observable<Paciente|null>;
    constructor(private http: HttpClient) {
        var usuario=localStorage.getItem('currentUser');
        if(usuario==null){
            usuario="null";
        }
        this.currentUserSubject = new BehaviorSubject<Paciente|null>(JSON.parse(usuario));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): Paciente|null {
        return this.currentUserSubject.value;
    }

    login(correoElectronico:any, contrasena:any) {
        return this.http.post<any>( `${GlobalConstants.apiURL}/administrador/autenticarAdministrador`, { correoElectronico, contrasena })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}