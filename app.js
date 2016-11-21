var app = require('./config/server');

var server = app.listen(3000, function() {
    console.info('Servidor online');
});

var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', function(socket) {
    console.info('Usuário conectou');

    socket.on('disconnect', function() {
        console.info('Usuário desconectou');
    });

    socket.on('message', function (data){
        socket.emit('message', data);
        socket.broadcast.emit('message', data);
        
        if(parseInt(data.apelido_atualizado) === 0) {
            socket.emit('people', data.apelido);
            socket.broadcast.emit('people', data.apelido);
        }
    });
});