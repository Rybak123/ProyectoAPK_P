const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Psicologo=db.Psicologo;
const Paciente=db.Paciente;
const Administrador = db.Administrador;
const Token = require("../../Tokens/token.model");
const sendEmail = require("../../../utils/email/sendEmail");
const crypto = require("crypto");
var generator = require('generate-password');

module.exports = {
    registarPsicologo,
    leerPsicologo,
    listarPsicologo,
    modificarPsicologo,
    deshabilitarPsicologo,
    habilitarPsicologo,
    autenticacionPsicologo,
    recuperarContrasena,
    cambiarContrasena
};

async function registarPsicologo(peticionJSON) {
    console.log("objeto :", peticionJSON);
  //  if (await Psicologo.findOne({ carnetDeIdentidad: peticionJSON.carnetDeIdentidad })) {
  //      throw 'Ya hay un psicologo con este carnet de identidad';
  //  }
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
    const psicologo = new Psicologo(peticionJSON);
    var contrasenaGenerada = generator.generate({
        length: 10,
    });
    psicologo.contrasena=contrasenaGenerada;
    psicologo.hashContrasena = bcrypt.hashSync(psicologo.contrasena, 10);

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
    if (!psicologo) throw 'Paciente no encontrado';
    if (await Administrador.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +peticionJSON.correoElectronico + '" ya a sido registrada';
    }
    if (psicologo.correoElectronico!== peticionJSON.correoElectronico && await Psicologo.findOne({correoElectronico:peticionJSON.correoElectronico})) {
        throw 'La siguiente direccion de correo electronico"' + peticionJSON.correoElectronico+ '" ya a sido registrada';
    }
    if (await Paciente.findOne({ correoElectronico: peticionJSON.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +peticionJSON.correoElectronico + '" ya a sido registrada';
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
async function habilitarPsicologo(peticionJSON) {
    const filter = { _id: peticionJSON.id };
        const update = { estado: true };

        let psicologo = await Psicologo.findOneAndUpdate(filter, update, {
        new: true
        });

        if(!psicologo){
        throw "No se encontró psicologo";
        }
    return psicologo;
}

async function autenticacionPsicologo({ correoElectronico, contrasena }) {
    const psicologo = await Psicologo.findOne({'carnetDeIdentidad':correoElectronico });
    console.log(correoElectronico)
    console.log(contrasena)
    console.log(psicologo)
    if (psicologo && bcrypt.compareSync(contrasena, psicologo.hashContrasena)) {
        console.log(psicologo)
        console.log("asdsadsdsa")
        const token = jwt.sign({ sub: psicologo.id }, config.secret, { expiresIn: '7d' });
        psicologo["token"]=token;
    
        return psicologo;
    }else{
        throw "carnet de identidad o contraseña incorrectos"
    }
}
async function recuperarContrasena(jsonData) {
    const paciente = await Psicologo.findOne({ correoElectronico:jsonData.correoElectronico });
    if(!paciente){throw "Psicologo no encontrado";}
    let token = await Token.findOne({ userId: paciente._id });
    if (token) await token.deleteOne();
    let resetToken =  crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, 10);
    await new Token({
        userId: paciente._id,
        token: hash,
        createdAt: Date.now(),
      }).save();
    const link = `localhost:4200/cambiarContrasenaRespuesta?token=${resetToken}&id=${paciente._id}&tipo=psicologo`;
    var succ= await sendEmail(paciente.correoElectronico,"Password Reset Request",{name: paciente.nombres,link: link,},"./template/requestResetPassword.handlebars");
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
    await Psicologo.updateOne(
        { _id: id },
        { $set: { hashContrasena: hash, contrasena: contrasena} },
        { new: true }
    );
    const administrador = await Psicologo.findById({ _id: id });
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