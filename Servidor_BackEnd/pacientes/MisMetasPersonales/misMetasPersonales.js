const config = require('config.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;

module.exports = {
    listarMetasPersonalesPaciente,
    create_MetasPersonalPaciente
};

async function listarMetasPersonalesPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
    var metasPacientePersonales=paciente.agendaVirtual.misMetasPersonales;
    return metasPacientePersonales;
}

async function create_MetasPersonalPaciente(infoJson) {
    console.log("entro al metodo de crear metas");
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

    var metasPersonales={
        tipoDeActividad: infoJson.metaPersonal.tipoDeActividad,
        fechaDeCompletitud: infoJson.metaPersonal.fechaDeCompletitud
    }

    paciente.agendaVirtual.misMetasPersonales.push(metasPersonales);
    return await paciente.save();
}
