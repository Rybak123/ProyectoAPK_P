const expressJwt = require('express-jwt');
const config = require('config.json');
const PacienteDao = require('../usuarios/paciente/services/PacienteDao');

module.exports = jwt;

//Interfiere con las peticiones  a las rutas en el servidor
function jwt() {
//return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            //Rutas publicas con las que se puede acceder al servidor

            //psicologo
            '/psicologo/registrarPsicologo',
            '/psicologo/leerPsicologo',
            '/psicologo/listarPsicologo',
            '/psicologo/modificarPsicologo',
            '/psicologo/deshabilitarPsicologo',
            '/psicologo/autenticarPsicologo',
            '/psicologo/habilitarPsicologo',
            '/psicologo/recuperarContrasena',
            '/psicologo/enlaceCambiarContrasena',
            //administrador
            '/administrador/registrarAdministrador',
            '/administrador/leerAdministrador',
            '/administrador/listarAdministrador',
            '/administrador/modificarAdministrador',
            '/administrador/desabilitarAdministrador',
            '/administrador/autenticarAdministrador',
            '/administrador/habilitarAdministrador',
            '/administrador/recuperarContrasena',
            '/administrador/enlaceCambiarContrasena',
            //paciente
            '/paciente/obtenerPaciente',
            '/paciente/modificarPaciente',
            '/paciente/deshabilitarPaciente',
            '/paciente/registrarPaciente',
            '/paciente/autenticacion',
            '/paciente/habiltiar_Paciente',
            '/paciente/listarPacientes',
            '/paciente/registrarPaciente',
            '/paciente/leerPaciente',
            '/paciente/recuperarContrasena',
            '/paciente/enlaceCambiarContrasena',
            '/excelUsuario/UsuarioRegistrado.csv',
            //pruebas generales
            '/pruebasGenerales/listarPruebaGeneral',
            '/pruebasGenerales/leerPruebaGeneral',
            '/datosPacientes',
            //eventos
            '/eventos/registrarEvento',
            '/eventos/leerEvento',
            '/eventos/listarEvento',
            '/eventos/modificarEvento',
            '/eventosImagenes',
            '/EventosImagenes'
        ]
    });
}
//Verficar si existe el usuario que entró al servidor
/*async function isRevoked(req, payload, done) {
    const user = await PacienteDao.obtenerPacientePorID(payload.sub);
    if (!user) {
        return done(null, true);
    }
    done();
};*/