import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from '../global-constants';

import { PacienteVO } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<PacienteVO[]>(`${GlobalConstants.apiURL}/paciente`);
    }

    register(user: PacienteVO) {
        return this.http.post(`${GlobalConstants.apiURL}/paciente/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${GlobalConstants.apiURL}/users/${id}`);
    }
}