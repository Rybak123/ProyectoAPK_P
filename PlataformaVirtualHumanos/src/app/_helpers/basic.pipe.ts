import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
@Pipe({ name: 'authImage'})
export class AuthImagePipe implements PipeTransform {
  
    constructor(
      private http: HttpClient
    ) {}
  
    async transform(src: string): Promise<string> {
        var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
        var usuario:any =JSON.parse(pacienteInfo);

        const token = usuario.token;
        const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
        console.log(src);
        try {
            const imageBlob = await this.http.get(src, {headers, responseType: 'blob'}).toPromise();
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(imageBlob);
            });
        } catch {
            return 'assets/fallback.png';
        }
    }
  
}