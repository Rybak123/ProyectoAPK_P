const expressJwt = require('express-jwt');
const config = require('config.json');
const PacienteDao = require('../usuarios/paciente/services/PacienteDao');

module.exports = jwt;

//Interfiere con las peticiones  a las rutas en el servidor
function jwt() {

    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            //Rutas publicas con las que se puede acceder al servidor

            //psicologo
            '/psicologo/registrarPsicologo',
            '/psicologo/leerPsicologo',
            '/psicologo/listarPsicologo',
            '/psicologo/modificarPsicologo',
            '/psicologo/deshabilitarPsicologo',
            //administrador
            '/administrador/registrarAdministrador',
            '/administrador/leerAdministrador',
            '/administrador/listarAdministrador',
            '/administrador/modificarAdministrador',
            '/administrador/desabilitarAdministrador',
            //paciente
            '/paciente/obtenerPaciente',
            '/paciente/actualizarPaciente',
            '/paciente/deshabilitarPaciente',
            '/pacientes/registrarPaciente',
            '/pacientes/autenticacion',
            '/paciente/habiltiar_Paciente'
        ]
    });
}
//Verficar si existe el usuario que entró al servidor
async function isRevoked(req, payload, done) {
    const user = await PacienteDao.obtenerPacientePorID(payload.sub);
    if (!user) {
        return done(null, true);
    }
    done();
};