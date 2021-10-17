const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Psicologo=db.Psicologo;
const Paciente=db.Paciente;
const Administrador = db.Administrador;
var generator = require('generate-password');
const Token = require("../../Tokens/token.model");
const sendEmail = require("../../../utils/email/sendEmail");
const crypto = require("crypto");
module.exports = {
    registrarAdministrador,
    leerAdministrador,
    listarAdministrador,
    modificarAdministrador,
    desabilitarAdministrador,
    autenticacionAdministrador,
    habilitarAdministrador,
    recuperarContrasena,
    cambiarContrasena
};
async function registrarAdministrador(peticionJSON) {
    if (await Administrador.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad }))
    {
        throw 'El presente carnet de identidad ya a sido registrado';
    }
    if (await Administrador.findOne({ correoElectronico: peticionJSON.correoElectronico }))
    {
        throw 'La siguiente direccion de correo electronico ya a sido registrada';
    }
    if (await Psicologo.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad }) ){
        throw 'El presente carnet de identidad ya a sido registrado';
    }
    if (await Psicologo.findOne({correoElectronico:peticionJSON.correoElectronico})) {
        throw 'La siguiente direccion de correo electronico ya a sido registrada';
    }
    if (await Paciente.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad })) {
        throw 'El presente carnet de identidad ya a sido registrado';
    }
    if (await Paciente.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico ya a sido registrada';
    }
    const administrador = new Administrador(peticionJSON);
    var contrasenaGenerada = generator.generate({
        length: 10,
    });
    administrador.contrasena=contrasenaGenerada;

    if (peticionJSON.contrasena) {
        administrador.hash_contrasena = bcrypt.hashSync(administrador.contrasena, 10);
    }

    var fs = require('fs');
    const path = require('path');
    const uploadFolder = path.join(__dirname, "../../","../","excelInfoUsuario");

    if (!fs.existsSync(uploadFolder)){
        fs.mkdirSync(uploadFolder, { recursive: true });
    }

    var writeStream = fs.createWriteStream(uploadFolder+"/UsuarioRegistrado.csv");

    var header="Carnet de identidad"+","+"Contrasena"+","+"Nombre"+","+"Apellido"+","+"Fecha de nacimiento"+","+"Genero"+","+"Numero telefonico"+","+"Correo electronico"+","+"Estado"+","+"Fecha de registro"+"\n";
    var row1 = administrador.carnetDeIdentidad+","+administrador.contrasena+","+administrador.nombre+","+administrador.apellidos+","+administrador.fechaDeNacimiento+","+administrador.sexo+","+administrador.numeroTelefonico+","+administrador.correoElectronico+","+administrador.estado+","+administrador.fechaDeRegistro+"\n";

    writeStream.write(header);
    writeStream.write(row1);

    writeStream.close();


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
    console.log(peticionJSON);
    const administrador = await Administrador.findById(peticionJSON.id);
    // validate
    if (!administrador) throw 'Administrador no encontrado';
    if (administrador.correoElectronico !== peticionJSON.correoElectronico && await Administrador.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +peticionJSON.correoElectronico + '" ya a sido registrada';
    }
    if (await Psicologo.findOne({correoElectronico:peticionJSON.correoElectronico})) {
        throw 'La siguiente direccion de correo electronico"' + peticionJSON.correoElectronico+ '" ya a sido registrada';
    }
    if (await Paciente.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +peticionJSON.correoElectronico + '" ya a sido registrada';
    }
    if (administrador.carnetDeIdentidad !== peticionJSON.carnetDeIdentidad && await Administrador.findOne({ correoElectronico: peticionJSON.carnetDeIdentidad })) {
        throw 'El siguiente carned de identidad "' +peticionJSON.carnetDeIdentidad + '" ya a sido registrada';
    }
    // hash password if it was entered
    console.log(peticionJSON);
    if (peticionJSON.contrasena) {
        administrador.hash_contrasena = bcrypt.hashSync(peticionJSON.contrasena, 10);
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
async function autenticacionAdministrador({ correoElectronico, contrasena }) {
    const administrador = await Administrador.findOne({'carnetDeIdentidad':correoElectronico });
    if (administrador && bcrypt.compareSync(contrasena, administrador.hash_contrasena)) {
        const token = jwt.sign({ sub: administrador.id }, config.secret, { expiresIn: '7d' });
        administrador["token"]=token;
        return administrador;
    }else{
        throw "Carnet de identidad o contraseña incorrectos"
    }
}
async function habilitarAdministrador(peticionJSON) {
    const filter = { _id: peticionJSON.id };
    const update = { estado: true };
    let administrador = await Administrador.findOneAndUpdate(filter, update, {
    new: true
    });
    if(!administrador){
    throw "No se encontró administrador";
  }
  return administrador;
}
async function recuperarContrasena(jsonData) {
    const paciente = await Administrador.findOne({ correoElectronico:jsonData.correoElectronico });
    if(!paciente){throw "Correo no encontrado";}
    let token = await Token.findOne({ userId: paciente._id });
    if (token) await token.deleteOne();
    let resetToken =  crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, 10);
    await new Token({
        userId: paciente._id,
        token: hash,
        createdAt: Date.now(),
      }).save();
    const link = `localhost:4200/cambiarContrasenaRespuesta?token=${resetToken}&id=${paciente._id}&tipo=administrador`;
    var succ= await sendEmail(paciente.correoElectronico,"Peticion para cambiar la contrasena",{name: paciente.nombres,link: link,},"./template/requestResetPassword.handlebars");
    return link;
}
async function cambiarContrasena(jsonData) {
    var token=jsonData.token;
    var id=jsonData.id;
    var contrasena=jsonData.contrasena;
    let passwordResetToken = await Token.findOne({userId: id });
   
    if (!passwordResetToken) {
        throw new Error("Enlace expirado");
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) {
        throw new Error("Enlace expirado");
    }
    const hash = await bcrypt.hash(contrasena, 10);
    await Administrador.updateOne(
        { _id: id },
        { $set: { hash_contrasena: hash, contrasena: contrasena} },
        { new: true }
    );
    const administrador = await Administrador.findById({ _id: id });
    sendEmail(
        administrador.correoElectronico,
        "Password Reset Successfully",
        {
        name: administrador.nombres,
        },
        "./template/resetPassword.handlebars"
    );
    await passwordResetToken.deleteOne();
    return true;
}