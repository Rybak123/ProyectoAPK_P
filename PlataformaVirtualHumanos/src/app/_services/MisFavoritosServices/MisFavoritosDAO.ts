import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
import {FavoritoModel} from "./FavoritoModel";
import { ReplaySubject } from 'rxjs';
export class MisCancionesDAO
{
    coneccionServidor:any;
    carnetDeIdentidadPaciente:any;
    constructor(private http:HttpClient) {
        this.coneccionServidor=new ConeccionServidor(this.http)
        var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
        var usuario:any =JSON.parse(pacienteInfo);
        this.carnetDeIdentidadPaciente=usuario.carnetDeIdentidad;
    }
    async listarFavoritos(){
        var parametros={"carnetDeIdentidad": this.carnetDeIdentidadPaciente}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/listarFavoritos");
    }

    async read_Favorito(id_Favorito:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Favorito":id_Favorito
        }

        var respuestaHTTP_favorito= await this.coneccionServidor.coneccionServidor(parametros,"/paciente/read_Favorito");
        
        var FavoritoLeido=new FavoritoModel();
        FavoritoLeido.set_id(respuestaHTTP_favorito.id);
        FavoritoLeido.set_titulo(respuestaHTTP_favorito.titulo);
        FavoritoLeido.set_imagen(respuestaHTTP_favorito.imegen);
        FavoritoLeido.set_clasificacion(respuestaHTTP_favorito.clasificacion);
        FavoritoLeido.set_descripcion(respuestaHTTP_favorito.descripcion);
        FavoritoLeido.set_tipoDeFavorito(respuestaHTTP_favorito.tipoDeFavorito);
        return FavoritoLeido;
    }

    async create_Favorito(titulo:any,imagen:any,clasificacion:any,descripcion:any,tipoDeFavorito:any){
        
        var nuevoFavorito=new FavoritoModel();
        nuevoFavorito.set_titulo(titulo);
        nuevoFavorito.set_imagen(imagen);
        nuevoFavorito.set_clasificacion(clasificacion);
        nuevoFavorito.set_descripcion(descripcion);
        nuevoFavorito.set_tipoDeFavorito(tipoDeFavorito);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "favorito":nuevoFavorito};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/create_Favorito")
        return respuesta;
    }

    async update_Favorito(titulo:any,imagen:any,clasificacion:any,descripcion:any,tipoDeFavorito:any){
        var modificarFavorito=new FavoritoModel();
        modificarFavorito.set_titulo(titulo);
        modificarFavorito.set_imagen(imagen);
        modificarFavorito.set_clasificacion(clasificacion);
        modificarFavorito.set_descripcion(descripcion);
        modificarFavorito.set_tipoDeFavorito(tipoDeFavorito);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "favorito":modificarFavorito};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/update_Favorito")
        return respuesta;
            
    }
    async delete_Favorito(id_Favorito:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Favorito":id_Favorito}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/delete_Favorito");
    }

}
