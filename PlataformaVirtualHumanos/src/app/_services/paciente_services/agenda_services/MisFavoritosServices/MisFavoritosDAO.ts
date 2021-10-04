import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
import {FavoritoModel} from "./FavoritoModel";
import { ReplaySubject } from 'rxjs';
export class MisFavoritosDAO
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
    async listarFavoritos(tipoFavorito:any){
        var parametros={"carnetDeIdentidad": this.carnetDeIdentidadPaciente,"tipoFavorito": tipoFavorito}
        return await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/listarFavoritos");
    }

    async read_Favorito(id_Favorito:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Favorito":id_Favorito
        }

        var respuestaHTTP_favorito= await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/read_favorito");
        
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
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/create_favorito")
        return respuesta;
    }

    async update_Favorito(id:any,titulo:any,imagen:any,clasificacion:any,descripcion:any,tipoDeFavorito:any){
        var modificarFavorito=new FavoritoModel();
        modificarFavorito.set_id(id);
        modificarFavorito.set_titulo(titulo);
        modificarFavorito.set_imagen(imagen);
        modificarFavorito.set_clasificacion(clasificacion);
        modificarFavorito.set_descripcion(descripcion);
        modificarFavorito.set_tipoDeFavorito(tipoDeFavorito);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "favorito":modificarFavorito};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/update_favorito")
        return respuesta;
            
    }
    async delete_Favorito(id_Favorito:any,tipoFavorito:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Favorito":id_Favorito,
            "tipoDeFavorito":tipoFavorito}
        return await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/delete_favorito");
    }
    async create_favoritoMandarImagen(id:any,formularioImagen:any,tipoFavorito:any){
        return await this.coneccionServidor.coneccionServidor(formularioImagen,`/pacientes/mandar_imagen_favorito?id=${id}&carnetDeIdentidad=${this.carnetDeIdentidadPaciente}&tipoFavorito=${tipoFavorito}`);
    }
}
