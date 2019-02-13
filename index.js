var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000, ()=> {
	console.log("Listening to port 4000");
});
//static files
app.use(express.static('Html'));

//socket connection
var io = socket(server);

io.on('connection', (socket)=> {
	console.log('made socket connection', socket.id);

	socket.on('chat', (data)=>{
		io.sockets.emit('chat', data); 
	});

	socket.on('typing', (data)=>{
		socket.broadcast.emit('typing', data);
	});
});

