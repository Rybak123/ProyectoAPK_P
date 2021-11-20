const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;
var mongoose = require('mongoose');

//sdasd


module.exports = {
    obtenerTodos_PruebasDeDesarolloCognitivo,
    leer_PruebasDeDesarolloCognitivo,
    ingresar_PruebasDeDesarolloCognitivo
};


async function obtenerTodos_PruebasDeDesarolloCognitivo(infoJson) {
    var paciente=await Paciente.findOne({_id:infoJson.idPaciente});
    return paciente.pruebasDeDesarolloCognitivo;
}
async function leer_PruebasDeDesarolloCognitivo(infoJson) {
    var paciente=await Paciente.findOne({_id:infoJson});
    return paciente.pruebasDeDesarolloCognitivo;
}
async function ingresar_PruebasDeDesarolloCognitivo(infoJson) {
    var nuevoId = mongoose.Types.ObjectId();
    var PruebaDesarolloCognitivo={
        id:nuevoId,
        tipoDePrueba:infoJson.pruebasDeDesarolloCognitivo.tipoDePrueba,
        FechaYHoraDeInicio:infoJson.pruebasDeDesarolloCognitivo.FechaYHoraDeInicio,
        FechaYHoraDeFin:infoJson.pruebasDeDesarolloCognitivo.FechaYHoraDeFin,
        actividades:infoJson.pruebasDeDesarolloCognitivo.actividades,
        puntajeFinal:infoJson.pruebasDeDesarolloCognitivo.puntajeFinal
    }
    return await Paciente.updateOne(
        { _id: infoJson.id },
        { $push: { pruebasDeDesarolloCognitivo: PruebaDesarolloCognitivo} },
        { new: true }
    );
}
