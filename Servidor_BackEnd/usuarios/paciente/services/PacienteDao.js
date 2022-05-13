const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');

var generator = require('generate-password');
const Token = require("../../Tokens/token.model");
const sendEmail = require("../../../utils/email/sendEmail");
const crypto = require("crypto");
const Psicologo=db.Psicologo;
const Paciente=db.Paciente;
const Administrador = db.Administrador;



module.exports = {
    paciente_listarTodos,
    read_Paciente,
    create_Paciente,
    update_paciente,
    actualizarHoraDeEstudio,
    autenticacion,
    obtenerPacientePorID,
    actualizarControlDeSueno,
    actualizarControlDeEnergia,
    actualizarControlDeAnimo,
    actualizarcontrolDeConsumoDeAgua,
    deshabiltiar_Paciente,
    habiltiar_Paciente,
    recuperarContrasena,
    cambiarContrasena

};

//La constante Paciente es de tipo Schema de Mongoose
async function paciente_listarTodos() {
    return await Paciente.find();
}

async function read_Paciente(infoJson) {
    return await Paciente.findOne({_id:infoJson});
}
async function obtenerPacientePorID(informacionJson) {

    return await Paciente.findById(informacionJson.id);
}
async function update_paciente(informacionJson) {
    const pacienteEncontrado = await Paciente.findById(informacionJson.id);
    // validate
    if (!pacienteEncontrado) throw 'Paciente no encontrado';
    if (await Administrador.findOne({ correoElectronico: informacionJson.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +informacionJson.correoElectronico + '" ya a sido registrada';
    }
    if (await Psicologo.findOne({correoElectronico:informacionJson.correoElectronico})) {
        throw 'La siguiente direccion de correo electronico"' + informacionJson.correoElectronico+ '" ya a sido registrada';
    }
    if (pacienteEncontrado.correoElectronico !== informacionJson.correoElectronico && await pacienteEncontrado.findOne({ correoElectronico: informacionJson.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico "' +informacionJson.correoElectronico + '" ya a sido registrada';
    }

    console.log(informacionJson);
    if (informacionJson.contrasena) {
        informacionJson.hash = bcrypt.hashSync(informacionJson.contrasena, 10);
    }

    Object.assign(pacienteEncontrado, informacionJson);
    return await pacienteEncontrado.save();
}

async function deshabiltiar_Paciente(consultaJSON) {
    const filter = { _id: consultaJSON.id };
    const update = { estado: false };
    let doc = await Paciente.findOneAndUpdate(filter, update, {
    new: true
    });

    if(!doc){
    throw "No se encontró el paciente";
    }
    return doc;
}
async function habiltiar_Paciente(consultaJSON) {
    const filter = { _id: consultaJSON.id };
    const update = { estado: true };
    let doc = await Paciente.findOneAndUpdate(filter, update, {
    new: true
    });

    if(!doc){
    throw "No se encontró el paciente";
    }
    return doc;
}

/////////////////////////OperacionesAgendaVirtual

async function actualizarHoraDeEstudio(infoJson) {
    var fechaCompleta=infoJson.fecha;
    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {
        var diaControlado=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.controlDeEstudio.diasControlados.fecha":fechaCompleta});        
        if(diaControlado.length>0){
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad,
                'agendaVirtual.controlDeEstudio.diasControlados.fecha': fechaCompleta
              }, {
                '$set': {
                  'agendaVirtual.controlDeEstudio.diasControlados.$.materiasEstudiadas': infoJson.materiasEstudiadas
                }
              })
              return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
        }
        else{
            var MyDate = new Date(); // 2021-5-1
            var datetime = MyDate.getFullYear()+ '-'
            + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
            + ('0' + MyDate.getDate()).slice(-2);
            var diasControlados={
                fecha:datetime,
                materiasEstudiadas:infoJson.materiasEstudiadas
            }
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad
             },{
                $push: { 'agendaVirtual.controlDeEstudio.diasControlados': diasControlados}
             });
             return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
         
        }
    }
    else{
        throw 'No se encontró el paciente';
    }
}
async function actualizarControlDeSueno(infoJson) {
    var fechaCompleta=infoJson.fecha;
    console.log(fechaCompleta);
    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {
        
        var diaControlado=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.controlDeSueno.diasControlados.fecha":fechaCompleta});        
        if(diaControlado.length>0){
            console.log("si");
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad,
                'agendaVirtual.controlDeSueno.diasControlados.fecha': fechaCompleta
              }, {
                '$set': {
                  'agendaVirtual.controlDeSueno.diasControlados.$.horasDeSueno': infoJson.horasDeSueno
                }
              })
            return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
        
        }
        else{
            console.log("no");
            var MyDate = new Date(); 
            var datetime = fechaCompleta;
            var nuevoDiaControlado={
                fecha:datetime,
                horasDeSueno:infoJson.horasDeSueno
            }
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad
             },{
                $push: { 'agendaVirtual.controlDeSueno.diasControlados': nuevoDiaControlado}
             });
            return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

        }
    }
    else{
        throw 'No se encontró el paciente';
    }
}
async function actualizarControlDeEnergia(infoJson) {
    var fechaCompleta=infoJson.fecha;
    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {
        var diaControlado=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.controlDeEnergia.diasControlados.fecha":fechaCompleta});        
        if(diaControlado.length>0){
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad,
                'agendaVirtual.controlDeEnergia.diasControlados.fecha': fechaCompleta
              }, {
                '$set': {
                  'agendaVirtual.controlDeEnergia.diasControlados.$.porcentajeDeEnergia': infoJson.porcentajeDeEnergia
                }
              })
              return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
        }
        else{
            var MyDate = new Date(); 
            var datetime = fechaCompleta;
            var nuevoDiaControlado={
                fecha:datetime,
                porcentajeDeEnergia:infoJson.porcentajeDeEnergia
            }
             await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad
             },{
                $push: { 'agendaVirtual.controlDeEnergia.diasControlados': nuevoDiaControlado}
             });
             return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

        }
    }
    else{
        throw 'No se encontró el paciente';
    }
}
async function actualizarControlDeAnimo(infoJson) {
    var fechaCompleta=infoJson.fecha;
    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {
        var diaControlado=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.controlDeAnimo.diasControlados.fecha":fechaCompleta});        
        if(diaControlado.length>0){
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad,
                'agendaVirtual.controlDeAnimo.diasControlados.fecha': fechaCompleta
              }, {
                '$set': {
                  'agendaVirtual.controlDeAnimo.diasControlados.$.estadoDeAnimo': infoJson.estadoDeAnimo
                }
              })
              return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
        }
        else{
            var MyDate = new Date(); 
            var datetime = fechaCompleta;
            var nuevoDiaControlado={
                fecha:datetime,
                estadoDeAnimo:infoJson.estadoDeAnimo
            }
             await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad
             },{
                $push: { 'agendaVirtual.controlDeAnimo.diasControlados': nuevoDiaControlado}
             });
             return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

        }
    }
    else{
        throw 'No se encontró el paciente';
    }
}
async function actualizarcontrolDeConsumoDeAgua(infoJson) {
    var fechaCompleta=infoJson.fecha;
    if (await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})) {
        var diaControlado=await Paciente.find({carnetDeIdentidad: infoJson.carnetDeIdentidad,"agendaVirtual.controlDeConsumoDeAgua.diasControlados.fecha":fechaCompleta});        
        if(diaControlado.length>0){
    
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad,
                'agendaVirtual.controlDeConsumoDeAgua.diasControlados.fecha': fechaCompleta
              }, {
                '$set': {
                  'agendaVirtual.controlDeConsumoDeAgua.diasControlados.$.cantidadDeAgua': infoJson.cantidadDeAgua
                }
              })
              return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});
        }
        else{
           
            var MyDate = new Date(); 
            var datetime = fechaCompleta;
            var nuevoDiaControlado={
                fecha:datetime,
                cantidadDeAgua:infoJson.cantidadDeAgua
            }
            await Paciente.findOneAndUpdate({
                carnetDeIdentidad: infoJson.carnetDeIdentidad
             },{
                $push: { 'agendaVirtual.controlDeConsumoDeAgua.diasControlados': nuevoDiaControlado}
             });
             return await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad});

        }
    }
    else{
        throw 'No se encontró el paciente';
    }
}
async function create_Paciente(pacienteJson) {
    if (await Administrador.findOne({ carnetDeIdentidad: pacienteJson.carnetDeIdentidad }))
    {
        throw 'El presente carnet de identidad ya a sido registrado';
    }
    if (await Administrador.findOne({ correoElectronico: pacienteJson.correoElectronico }))
    {
        throw 'La siguiente direccion de correo electronico ya a sido registrada';
    }
    if (await Psicologo.findOne({ carnetDeIdentidad: pacienteJson.carnetDeIdentidad }) ){
        throw 'El presente carnet de identidad ya a sido registrado';
    }
    if (await Psicologo.findOne({correoElectronico:pacienteJson.correoElectronico})) {
        throw 'La siguiente direccion de correo electronico ya a sido registrada';
    }
    if (await Paciente.findOne({ carnetDeIdentidad: pacienteJson.carnetDeIdentidad })) {
        throw 'El presente carnet de identidad ya a sido registrado';
    }
    if (await Paciente.findOne({ correoElectronico: pacienteJson.correoElectronico })) {
        throw 'La siguiente direccion de correo electronico ya a sido registrada';
    }
    const paciente = new Paciente(pacienteJson);

    var contrasenaGenerada = generator.generate({
        length: 10,
    });

    paciente.contrasena=contrasenaGenerada;
    
    if (pacienteJson.contrasena) {
        paciente.hash = bcrypt.hashSync(paciente.contrasena, 10);
    }

    var diaDeEstudio={
        fecha:"2021-1-1",
        materiasEstudiadas:[
        {cantidadDeTiempo:0,
            materia:""}
        ]
    }
    var diasControlados_Sueno={
        fecha:"2021-1-1",
        horasDeSueno:""
    }
    var diasControlados_Energia={
        fecha:"2021-1-1",
        porcentajeDeEnergia:""
    }
    var diasControlados_Animo={
        fecha:"2021-1-1",
        estadoDeAnimo:""
    }
    var diaDeEstudio_ConsumoDeAgua={
        fecha:"2021-1-1",
        cantidadDeAgua:""
    }

    paciente.agendaVirtual.controlDeEstudio.diasControlados.push(diaDeEstudio);
    paciente.agendaVirtual.controlDeSueno.diasControlados.push(diasControlados_Sueno);
    paciente.agendaVirtual.controlDeEnergia.diasControlados.push(diasControlados_Energia);
    paciente.agendaVirtual.controlDeAnimo.diasControlados.push(diasControlados_Animo);
    paciente.agendaVirtual.controlDeConsumoDeAgua.diasControlados.push(diaDeEstudio_ConsumoDeAgua);

    var fs = require('fs');
    const path = require('path');
    const uploadFolder = path.join(__dirname, "../../","../","excelInfoUsuario");

    if (!fs.existsSync(uploadFolder)){
        fs.mkdirSync(uploadFolder, { recursive: true });
    }

    var writeStream = fs.createWriteStream(uploadFolder+"/UsuarioRegistrado.csv");

    var header="Carnet de identidad"+","+"Contrasena"+","+"Nombre"+","+"Apellido"+","+"Fecha de nacimiento"+","+"Genero"+","+"Numero telefonico"+","+"Correo electronico"+","+"Estado"+","+"Fecha de registro"+"\n";
    var row1 = paciente.carnetDeIdentidad+","+paciente.contrasena+","+paciente.nombres+","+paciente.apellidos+","+paciente.fechaDeNacimiento+","+paciente.sexo+","+paciente.numeroTelefonico+","+paciente.correoElectronico+","+paciente.estado+","+paciente.fechaDeRegistro+"\n";

    writeStream.write(header);
    writeStream.write(row1);

    writeStream.close();


    return await paciente.save();
}

async function autenticacion({ correoElectronico, contrasena }) {
  
    const paciente = await Paciente.findOne({carnetDeIdentidad: correoElectronico });
    console.log(paciente);
    if (paciente && bcrypt.compareSync(contrasena, paciente.hash)) {
        const token = jwt.sign({ sub: paciente.id }, config.secret, { expiresIn: '7d' });
        paciente["token"]=token;
        return paciente;
    }else{
        throw "Carnet de identidad o contraseña incorrecta"
    }
}
async function recuperarContrasena(jsonData) {
    const paciente = await Paciente.findOne({ correoElectronico:jsonData.correoElectronico });
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
    const link = `localhost:4200/cambiarContrasenaRespuesta?token=${resetToken}&id=${paciente._id}&tipo=paciente`;
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
    await Paciente.updateOne(
        { _id: id },
        { $set: { hash: hash, contrasena: contrasena} },
        { new: true }
    );
    const paciente = await Paciente.findById({ _id: id });
    sendEmail(
        paciente.correoElectronico,
        "Password Reset Successfully",
        {
        name: paciente.nombres,
        },
        "./template/resetPassword.handlebars"
    );
    await passwordResetToken.deleteOne();
    return true;
}