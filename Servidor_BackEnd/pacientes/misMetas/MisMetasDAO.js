const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;

module.exports = {
    listarMetasPaciente,
    create_MetasPaciente,
    Read_MetaPaciente,
    update_MetaPaciente
};


//////////// OPERACIONES CRUD //////////////

async function listarMetasPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var metasPaciente=paciente.agendaVirtual.misMetas;
    return metasPaciente;
}

async function create_MetasPaciente(infoJson) {
    console.log("entro al metodo de crear metas");
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

    var metas={
        titulo: infoJson.titulo,
        fechaDeRegistro: infoJson.fechaDeRegistro,
        fechaDeLaMeta: infoJson.fechaDeLaMeta,
        prioridad: infoJson.prioridad,
        descripcion:infoJson.descripcion
    }

    paciente.agendaVirtual.misMetas.push(metas);
    await paciente.save();
}

async function Read_MetaPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var metaPaciente= paciente.agendaVirtual.misMetas;
    var meta = metaPaciente.find(element => element.titulo == infoJson.titulo);
    return meta;
}

async function update_MetaPaciente(infoJson) {

    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {   
        var meta=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misMetas._id":infoJson.id});   
        if(meta.length>0){
            if(infoJson.titulo){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.titulo': infoJson.titulo
                    }
                })
            } 
            if(infoJson.fechaDeRegistro){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.fechaDeRegistro': infoJson.fechaDeRegistro
                    }
                })
            }
            if(infoJson.fechaDeLaMeta){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.fechaDeLaMeta': infoJson.fechaDeLaMeta
                    }
                })
            }
            if(infoJson.prioridad){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.prioridad': infoJson.prioridad
                    }
                })
            }
            if(infoJson.descripcion){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.descripcion': infoJson.descripcion
                    }
                })
            }
        }
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }
    else{
        throw 'No se encontró el paciente';
    }
    
}