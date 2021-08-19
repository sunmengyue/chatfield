const express = require('express');
const http = require('http');
const app = express();
const { Server } = require('socket.io');

// 1. create and start server
const port = process.env.PORT || 8081;
const server = http.createServer(app);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// intergrating socket.io
const io = new Server(server);
io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(port, () => {
  console.log(`server is listening on ${port} `);
});
