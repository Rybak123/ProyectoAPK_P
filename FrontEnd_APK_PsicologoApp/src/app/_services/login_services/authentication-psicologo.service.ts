import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{ GlobalConstants } from '../../../app/global-constants';
import { Psicologo } from 'src/app/_models/psicologo_model/psicologo';

@Injectable({ providedIn: 'root' })
export class AuthenticacionPsicologoService {
    private currentUserSubject: BehaviorSubject<Psicologo|null>;
    public currentUser: Observable<Psicologo|null>;
    constructor(private http: HttpClient) {
        var usuario=localStorage.getItem('currentUser');
        if(usuario==null){
            usuario="null";
        }
        this.currentUserSubject = new BehaviorSubject<Psicologo|null>(JSON.parse(usuario));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): Psicologo|null {
        return this.currentUserSubject.value;
    }

    login(correoElectronico:any, contrasena:any) {
        return this.http.post<any>( `${GlobalConstants.apiURL}/psicologo/autenticarPsicologo`, { correoElectronico, contrasena })
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