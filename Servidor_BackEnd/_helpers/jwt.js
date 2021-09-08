const expressJwt = require('express-jwt');
const config = require('config.json');
const PacienteDao = require('../pacientes/PacienteDao');

module.exports = jwt;

//Interfiere con las peticiones  a las rutas en el servidor
function jwt() {

    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            //Rutas publicas con las que se puede acceder al servidor
            '/pacientes/registrarPaciente',
            '/pacientes/autenticacion',
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