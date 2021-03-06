//Make connection
var socket = io.connect("http://localhost:4000/");

//query Dom
var message = document.getElementById('message');
	handle = document.getElementById('handle');
	btn = document.getElementById('send');
	output = document.getElementById('output');
	feedback = document.getElementById('feedback');


//emit events

btn.addEventListener('click', ()=>{
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

message.addEventListener('keypress', ()=>{
	socket.emit('typing', {
		message: message.value, 
		handle: handle.value
	});
});

//Listen for evenst
socket.on('chat', (data)=>{
	feedback.innerHTML = "";
	output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', (data)=>{
	feedback.innerHTML = '<p><em>' + data.handle + ' is typing...</em></p>';
});