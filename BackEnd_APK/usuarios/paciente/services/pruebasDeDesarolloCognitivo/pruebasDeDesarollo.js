const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;
//sdasd


module.exports = {
    obtenerTodos_PruebasDeDesarolloCognitivo,
    leer_PruebasDeDesarolloCognitivo,
    ingresar_PruebasDeDesarolloCognitivo
};


async function obtenerTodos_PruebasDeDesarolloCognitivo(infoJson) {
    var paciente=await Paciente.findOne({_id:infoJson});
    return paciente.pruebasDeDesarolloCognitivo;
}
async function leer_PruebasDeDesarolloCognitivo(infoJson) {
    var paciente=await Paciente.findOne({_id:infoJson});
    return paciente.pruebasDeDesarolloCognitivo;
}
async function ingresar_PruebasDeDesarolloCognitivo(infoJson) {
    console.log(infoJson);
    return await Paciente.updateOne(
        { _id: infoJson.id },
        { $push: { pruebasDeDesarolloCognitivo: infoJson.pruebasDeDesarolloCognitivo} },
        { new: true }
    );
}
