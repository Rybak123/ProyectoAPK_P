import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PacienteVO } from '../_models';

import{ GlobalConstants } from '../../app/global-constants';
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