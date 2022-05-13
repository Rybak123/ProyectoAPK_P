import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
import {MetasPersonalesModel} from "./MetasPersonalesModel";
import { ReplaySubject } from 'rxjs';
export class MisMetasPersonalesDAO
{
    coneccionServidor:any;
    carnetDeIdentidadPaciente:any;
    constructor(private http:HttpClient) {
        this.coneccionServidor=new ConeccionServidor(this.http)

        //ObtenerCarnetDeIdentiudad
        var pacienteInfo=localStorage.getItem('currentUser');
        if(pacienteInfo==null){
            pacienteInfo="null";
            throw console.error("Paciente no encontrado");
        }
        var usuario:any =JSON.parse(pacienteInfo);
        this.carnetDeIdentidadPaciente=usuario.carnetDeIdentidad;
    }
    async listarMetasPersonales(){
        var parametros={"carnetDeIdentidad": this.carnetDeIdentidadPaciente}
        return await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/listarMetasPersonales");
    }

    //async read_Meta(id_Meta:any){
    //    var parametros={
    //        "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
    //       "id_Meta":id_Meta
    //    }

    //    var respuestaHTTP_metaPersonal= await this.coneccionServidor.coneccionServidor(parametros,"/paciente/read_MetaPersonal");
        
    //    var MetaPersonalLeida=new MetasPersonalesModel();
    //    MetaPersonalLeida.set_tipoDeActividad(respuestaHTTP_metaPersonal.tipoDeActividad);
    //    MetaPersonalLeida.set_fechaDeCompletitud(respuestaHTTP_metaPersonal.fechaDeCompletitud);
       
    //    return MetaPersonalLeida;
    //}

    async create_MetaPersonal(tipoDeActividad:any,fechaDeCompletitud:any){
        
        var nuevaMetaPersonal=new MetasPersonalesModel();
        nuevaMetaPersonal.set_tipoDeActividad(tipoDeActividad);
        nuevaMetaPersonal.set_fechaDeCompletitud(fechaDeCompletitud);
    
    
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "metaPersonal":nuevaMetaPersonal};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/pacientes/create_metas_personales")
        return respuesta;
    }

    
}
