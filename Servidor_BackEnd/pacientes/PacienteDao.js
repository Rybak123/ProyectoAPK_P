const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;


module.exports = {
    paciente_listarTodos,
    read_Paciente,
    create_Paciente,
    update_paciente,
    delete_Paciente,
    actualizarHoraDeEstudio,
    autenticacion,
    obtenerPacientePorID,
    actualizarControlDeSueno,
    actualizarControlDeEnergia,
    actualizarControlDeAnimo,
    actualizarcontrolDeConsumoDeAgua

};

//La constante Paciente es de tipo Schema de Mongoose
async function paciente_listarTodos() {
    return await Paciente.find();
}

async function read_Paciente(infoJson) {
    return await Paciente.findOne({carnetDeIdentidad:infoJson.carnetDeIdentidad});
}

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
    if (await Paciente.findOne({ carnetDeIdentidad: pacienteJson.carnetDeIdentidad })) {
        throw 'Ya hay un paciente con este carnet de identidad';
    }
    const paciente = new Paciente(pacienteJson);

    if (pacienteJson.contrasena) {
        paciente.hash = bcrypt.hashSync(pacienteJson.contrasena, 10);
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

    paciente.agendaVirtual.controlDeEstudio.diasDeEstudio.push(diaDeEstudio);
    await paciente.save();
}

async function update_paciente(carnetDeIdentidad, pacienteJson) {
    const pacienteEncontrado = await Paciente.findById(carnetDeIdentidad);

    if (!pacienteEncontrado) throw 'Paciente';
    if (pacienteEncontrado.nombreDeUsuario !== pacienteJson.nombreDeUsuario && await Paciente.findOne({ nombreDeUsuario: pacienteJson.nombreDeUsuario })) {
        throw 'Ese nombre de usaurio ya ha sido tomado';
    }

    if (pacienteJson.contrasena) {
        pacienteJson.hash = bcrypt.hashSync(pacienteJson.contrasena, 10);
    }

    Object.assign(pacienteEncontrado, pacienteJson);

    await pacienteEncontrado.save();
}

async function delete_Paciente(id) {
    await User.findByIdAndRemove(id);
}

async function autenticacion({ nombreDeUsuario, contrasena }) {
    const paciente = await Paciente.findOne({ nombreDeUsuario });
    if (paciente && bcrypt.compareSync(contrasena, paciente.hash)) {
        const token = jwt.sign({ sub: paciente.id }, config.secret, { expiresIn: '7d' });
        paciente["token"]=token;
        return paciente;
    }
}
async function obtenerPacientePorID(id) {
    return await Paciente.findById(id);
}