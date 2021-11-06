const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Eventos=db.Eventos;
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const informacionServidor=require('../../informacion_servidor/informacionServidor')

module.exports = {
    registrarEvento,
    leerEvento,
    listarEvento,
    modificarEvento
};
async function registrarEvento(req, res, next) {
    /*
  

    */


    const form = new formidable.IncomingForm();
    const uploadFolder = path.join(__dirname, "../../","EventosImagenes");
    form.multiples = true;
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = uploadFolder;

    if (!fs.existsSync(uploadFolder)){
        fs.mkdirSync(uploadFolder, { recursive: true });
    }
    form.parse(req, async (err, fields, files) => {
        try {

            if (await Eventos.findOne({ Titulo: fields.Titulo}))
            {
                throw 'El presente evento ya fue registrado';
            }
            const eventos = new Eventos(fields);
        
            var eventoGuardado=await eventos.save();


            const file = files.myFile;
            const fileName = eventoGuardado._id+"."+file.name.split('.').pop();;
            fs.renameSync(file.path, path.join(uploadFolder, fileName));
            var direccionImagen=informacionServidor.getUrl()+"/"+"Eventos"+"/"+eventoGuardado._id+"/"+fileName;
            
            res.status(201).json({
                type: 'Post',
                url: direccionImagen
            });
        } catch (error) {
          console.log(error);
        }
    });
}
async function leerEvento(peticionJSON){
    console.log(peticionJSON.id);
    return await Eventos.findById(peticionJSON.id);
}
async function listarEvento() {
    return await Eventos.find();
}
async function modificarEvento(peticionJSON) {
    console.log(peticionJSON);
    const eventos = await Eventos.findById(peticionJSON.id);
    // validate
    if (!eventos) throw 'Evento no encontrado';
    if (eventos.Descripcion !== peticionJSON.Descripcion && await Administrador.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +peticionJSON.correoElectronico + '" ya a sido registrada';
    }
 
    console.log(peticionJSON);
    Object.assign(eventos, peticionJSON);
    return await eventos.save();
}