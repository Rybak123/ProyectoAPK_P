export class MetasModel
{
    id:any;
    titulo:any;
    fechaDeRegistro:any;
    fechaDeLaMeta:any;
    prioridad:any;
    descripcion:any;
    
    constructor(){
    }
    set_id(id:any){
        this.id=id;
    }
    get_id(){
        return this.id
    }
    set_titulo(titulo:any){
        this.titulo=titulo;
    }
    get_titulo(){
        return this.titulo
    }
    set_fechaDeRegistro(fechaDeRegistro:any){
        this.fechaDeRegistro=fechaDeRegistro;
    }
    get_fechaDeRegistro(){
        return this.fechaDeRegistro
    }
    set_fechaDeLaMeta(fechaDeLaMeta:any){
        this.fechaDeLaMeta=fechaDeLaMeta;
    }
    get_fechaDeLaMeta(){
        return this.fechaDeLaMeta
    }
    set_prioridad(prioridad:any){
        this.prioridad=prioridad;
    }
    get_prioridad(){
        return this.prioridad
    }
    set_descripcion(descripcion:any){
        this.descripcion=descripcion;
    }
    get_descripcion(){
        return this.descripcion
    }

}