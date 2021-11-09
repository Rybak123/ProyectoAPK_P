module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log("Nueva coneccion");
        socket.on('message', function(message) {
            console.log(message);
            io.emit('messageRespuesta',message);
        });
    });
};