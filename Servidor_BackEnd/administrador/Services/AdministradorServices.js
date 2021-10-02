const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Administrador = db.Administrador;

module.exports = {
    registrarAdministrador,
    leerAdministrador,
    listarAdministrador,
    modificarAdministrador,
    desabilitarAdministrador

};
async function registrarAdministrador(peticionJSON) {
    console.log(peticionJSON);
    if (await Administrador.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad }))
    {
        throw 'Ya hay un administrador con este carnet de identidad';
    }
    const administrador = new Administrador(peticionJSON);

    if (peticionJSON.contrasena) {
        administrador.hash = bcrypt.hashSync(peticionJSON.contrasena, 10);
    }

    return await administrador.save();
}
async function leerAdministrador(peticionJSON) {
    console.log(peticionJSON.id);
    return await Administrador.findById(peticionJSON.id);
}
async function listarAdministrador() {
    return await Administrador.find();
}
async function modificarAdministrador(peticionJSON) {
    const administrador = await Administrador.findById(peticionJSON.id);
    // validate
    if (!administrador) throw 'Administrador no encontrado';
    if (administrador.correoElectronico !== peticionJSON.correoElectronico && await Administrador.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +peticionJSON.correoElectronico + '" ya a sido registrada';
    }
    if (administrador.carnetDeIdentidad !== peticionJSON.carnetDeIdentidad && await Administrador.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad })) {
        throw 'El siguiente carned de identidad "' +peticionJSON.carnetDeIdentidad + '" ya a sido registrada';
    }
    // hash password if it was entered
    if (peticionJSON.password) {
        peticionJSON.hash = bcrypt.hashSync(peticionJSON.password, 10);
    }
    // copy userParam properties to user
    Object.assign(administrador, peticionJSON);
    return await administrador.save();
}
async function desabilitarAdministrador(peticionJSON) {
    const filter = { _id: peticionJSON.id };
    const update = { estado: false };
    let administrador = await Administrador.findOneAndUpdate(filter, update, {
    new: true
    });
    if(!administrador){
    throw "No se encontró administrador";
  }
  return administrador;
}