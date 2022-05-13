import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{ GlobalConstants } from '../../../app/global-constants';
import { Paciente } from 'src/app/_models/paciente_model/paciente';
import { Administrador } from 'src/app/_models/administrador_model/administrador';

@Injectable({ providedIn: 'root' })
export class AuthenticacionAdministradorService {
    private currentUserSubject: BehaviorSubject<Administrador|null>;
    public currentUser: Observable<Administrador|null>;
    constructor(private http: HttpClient) {
        var usuario=localStorage.getItem('currentUser');
        if(usuario==null){
            usuario="null";
        }
        this.currentUserSubject = new BehaviorSubject<Administrador|null>(JSON.parse(usuario));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): Administrador|null {
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