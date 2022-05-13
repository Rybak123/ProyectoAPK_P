export class MetasPersonalesModel
{
    tipoDeActividad:any;
    fechaDeCompletitud:any;
    
    constructor(){
    }
    set_tipoDeActividad(tipoDeActividad:any){
        this.tipoDeActividad=tipoDeActividad;
    }
    get_tipoDeActividad(){
        return this.tipoDeActividad
    }
    set_fechaDeCompletitud(fechaDeCompletitud:any){
        this.fechaDeCompletitud=fechaDeCompletitud;
    }
    get_fechaDeCompletitud(){
        return this.fechaDeCompletitud
    }

}