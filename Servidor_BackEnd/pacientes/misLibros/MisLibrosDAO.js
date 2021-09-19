const config = require('config.json');
const bcrypt = require('bcryptjs');
const db = require('_helpers/conexion');
const Paciente=db.Paciente;


module.exports = {
    listarLibrosPaciente
};
// Operaciones CRUD+Listar

async function listarLibrosPaciente(infoJson) {
    var paciente=await Paciente.findOne({carnetDeIdentidad: infoJson.carnetDeIdentidad})
    var librosPaciente=paciente.agendaVirtual.misLibros;
    return librosPaciente;
}
async function create_LibroPaciente(infoJson) {
    await User.findByIdAndRemove();
}
async function Read_LibroPaciente(infoJson) {
    await User.findByIdAndRemove();
}
async function update_LibroPaciente(infoJson) {
    await User.findByIdAndRemove();
}
async function delete_LibroPaciente(infoJson) {
    await User.findByIdAndRemove();
}