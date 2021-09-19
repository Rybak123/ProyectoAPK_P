export class LibroModel
{
    constructor(private http:HttpClient) { }

    url=`${GlobalConstants.apiURL}`;
    
    async coneccionServidor(parametros:any,ruta:String){
        return await this.http.post(this.url+ruta, parametros).toPromise();
    }
}