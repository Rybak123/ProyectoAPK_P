import {ConeccionServidor} from '../coneccionFrontEndServices/ConeccionServidor'
import {HttpClient} from "@angular/common/http";
import {MetasModel} from "./MetasModel";
import { ReplaySubject } from 'rxjs';
export class MisMetasDAO
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
    async listarMetas(){
        var parametros={"carnetDeIdentidad": this.carnetDeIdentidadPaciente}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/listarMetas");
    }

    async read_Meta(id_Meta:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id_Meta":id_Meta
        }

        var respuestaHTTP_meta= await this.coneccionServidor.coneccionServidor(parametros,"/paciente/read_meta");
        
        var MetaLeida=new MetasModel();
        MetaLeida.set_id(respuestaHTTP_meta.id);
        MetaLeida.set_titulo(respuestaHTTP_meta.titulo);
        MetaLeida.set_fechaDeRegistro(respuestaHTTP_meta.fechaDeRegistro);
        MetaLeida.set_fechaDeLaMeta(respuestaHTTP_meta.fechaDeLaMeta);
        MetaLeida.set_prioridad(respuestaHTTP_meta.prioridad);
        MetaLeida.set_descripcion(respuestaHTTP_meta.descripcion);
        return MetaLeida;
    }

    async create_Meta(titulo:any,fechaDeRegistro:any,fechaDeLaMeta:any,prioridad:any,descripcion:any){
        
        var nuevaMeta=new MetasModel();
        nuevaMeta.set_titulo(titulo);
        nuevaMeta.set_fechaDeRegistro(fechaDeRegistro);
        nuevaMeta.set_fechaDeLaMeta(fechaDeLaMeta);
        nuevaMeta.set_prioridad(prioridad);
        nuevaMeta.set_descripcion(descripcion);
    
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "meta":nuevaMeta};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/create_meta")
        return respuesta;
    }

    async update_Meta(id:any,titulo:any,fechaDeRegistro:any,fechaDeLaMeta:any,prioridad:any,descripcion:any){
        var modificarMeta=new MetasModel();
        modificarMeta.set_id(id);
        modificarMeta.set_titulo(titulo);
        modificarMeta.set_fechaDeRegistro(fechaDeRegistro);
        modificarMeta.set_fechaDeLaMeta(fechaDeLaMeta);
        modificarMeta.set_prioridad(prioridad);
        modificarMeta.set_descripcion(descripcion);

        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "meta":modificarMeta};
        var respuesta=await this.coneccionServidor.coneccionServidor(parametros,"/paciente/update_meta")
        return respuesta;
            
    }
    async delete_Meta(id_Meta:any){
        var parametros={
            "carnetDeIdentidad": this.carnetDeIdentidadPaciente,
            "id":id_Meta}
        return await this.coneccionServidor.coneccionServidor(parametros,"/paciente/delete_meta");
    }

}
