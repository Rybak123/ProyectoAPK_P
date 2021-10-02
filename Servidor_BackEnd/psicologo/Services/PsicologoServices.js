const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Psicologo=db.Psicologo;

module.exports = {
    registarPsicologo,
    leerPsicologo,
    listarPsicologo,
    modificarPsicologo,
    deshabilitarPsicologo
};

async function registarPsicologo(peticionJSON) {
    console.log("objeto :", peticionJSON);
    if (await Psicologo.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad })) {
        throw 'Ya hay un psicologo con este carnet de identidad';
    }
    const psicologo = new Psicologo(peticionJSON);

    if (peticionJSON.contrasena) {
        psicologo.hash = bcrypt.hashSync(peticionJSON.contrasena, 10);
    }
    return await psicologo.save();
}

async function leerPsicologo(peticionJSON) {
    console.log(peticionJSON.id);
    return await Psicologo.findById(peticionJSON.id);
}
async function listarPsicologo() {
    return await Psicologo.find();
}
async function modificarPsicologo(peticionJSON) {
    const psicologo = await Psicologo.findById(peticionJSON.id);

    // validate
    if (!psicologo) throw 'User not found';
    if (psicologo.correoElectronico!== peticionJSON.correoElectronico && await Psicologo.findOne({correoElectronico:peticionJSON.correoElectronico})) {
        throw 'La siguiente direccion de correo electronico"' + peticionJSON.correoElectronico+ '" ya a sido registrada';
    }
    if (psicologo.carnetDeIdentidad!== peticionJSON.carnetDeIdentidad && await Psicologo.findOne({carnetDeIdentidad:peticionJSON.carnetDeIdentidad})) {
        throw 'La siguiente direccion de carnet de identidad"' + peticionJSON.carnetDeIdentidad + '" ya a sido registrada';
    }
    // hash password if it was entered
    if (peticionJSON.password) {
        peticionJSON.hash = bcrypt.hashSync(peticionJSON.password, 10);
    }

    // copy userParam properties to user
    Object.assign(psicologo, peticionJSON);

    await psicologo.save();
}
async function deshabilitarPsicologo(peticionJSON) {
    const filter = { _id: peticionJSON.id };
        const update = { estado: false };

        let psicologo = await Psicologo.findOneAndUpdate(filter, update, {
        new: true
        });

        if(!psicologo){
        throw "No se encontró psicologo";
        }
    return psicologo;
}