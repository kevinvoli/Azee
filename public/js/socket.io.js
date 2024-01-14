const socket = io('http://localhost:3000');
console.log(socket)
socket.on('chat message', (socket) => {
  console.log('a user connected');
});