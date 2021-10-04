const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;

module.exports = {
    listarMetasPaciente,
    create_MetasPaciente,
    Read_MetaPaciente,
    update_MetaPaciente,
    delete_MetaPaciente
};


//////////// OPERACIONES CRUD //////////////

async function listarMetasPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var metasPaciente=paciente.agendaVirtual.misMetas;
    return metasPaciente;
}

async function create_MetasPaciente(infoJson) {
    
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var metas={
        titulo: infoJson.meta.titulo,
        fechaDeRegistro: infoJson.meta.fechaDeRegistro,
        fechaDeLaMeta: infoJson.meta.fechaDeLaMeta,
        prioridad: infoJson.meta.prioridad,
        descripcion:infoJson.meta.descripcion
    }
    paciente.agendaVirtual.misMetas.push(metas);
    return await paciente.save();
}

async function Read_MetaPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var metaPaciente= paciente.agendaVirtual.misMetas;
    var meta = metaPaciente.find(element => element.titulo == infoJson.titulo);
    return meta;
}

async function update_MetaPaciente(infoJson) {


    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {   
        var meta=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.misMetas._id":infoJson.meta.id});   
        if(meta.length>0){
            if(infoJson.meta.titulo){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.meta.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.titulo': infoJson.meta.titulo
                    }
                })
            }
            else
            {
                throw "Error al cambiar el titulo"
            }
            if(infoJson.meta.fechaDeRegistro){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.meta.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.fechaDeRegistro': infoJson.meta.fechaDeRegistro
                    }
                })
            }
            else
            {
                throw "Error al cambiar la fecha de registro"
            }
            if(infoJson.meta.fechaDeLaMeta){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.meta.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.fechaDeLaMeta': infoJson.meta.fechaDeLaMeta
                    }
                })
            }
            else
            {
                throw "Error al cambiar la fecha de la meta"
            }
            if(infoJson.meta.prioridad){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.meta.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.prioridad': infoJson.meta.prioridad
                    }
                })
            }
            else
            {
                throw "Error al cambiar la prioridad"
            }
            if(infoJson.meta.descripcion){
                await Paciente.findOneAndUpdate({
                    carnetDeIdentidad: infoJson.carnetDeIdentidad,
                    'agendaVirtual.misMetas._id': infoJson.meta.id
                  }, {
                    '$set': {
                      'agendaVirtual.misMetas.$.descripcion': infoJson.meta.descripcion
                    }
                })
            }
            else
            {
                throw "Error al cambiar la descripcion"
            }
        }
        else
        {
                throw "No se encontró el paciente"
        }
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }
    else{
        throw 'No se encontró el paciente';
    }
    
}
async function delete_MetaPaciente(infoJson) {
    var deleteCancion=await Paciente.findOneAndUpdate({
      carnetDeIdentidad: infoJson.carnetDeIdentidad,
      'agendaVirtual.misMetas._id': infoJson.id
    }, {
      '$pull': {
        'agendaVirtual.misMetas': {"_id":infoJson.id}
      }
    });
    if(deleteCancion){
        return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    }else{
        throw "No se encontró el libro";
    }
}