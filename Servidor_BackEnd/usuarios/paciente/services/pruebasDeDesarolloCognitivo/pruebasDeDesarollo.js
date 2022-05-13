const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');

//sdasd


module.exports = {
    obtenerTodos_PruebasDeDesarolloCognitivo,
    leer_PruebasDeDesarolloCognitivo
};


async function obtenerTodos_PruebasDeDesarolloCognitivo(infoJson) {
    var paciente=await Paciente.findOne({_id:infoJson});
    return paciente.pruebasDeDesarolloCognitivo;
}
async function leer_PruebasDeDesarolloCognitivo(infoJson) {
    var paciente=await Paciente.findOne({_id:infoJson});
    return paciente.pruebasDeDesarolloCognitivo;
}
