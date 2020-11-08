const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = require('http').createServer(app);
const io = require('socket.io')(server);

setInterval(() => {
    var rNumbers = [Math.floor(Math.random() * 10 + 945), Math.floor(Math.random() * 10 + 675), Math.floor(Math.random() * 10 + 195), Math.floor(Math.random() * 10 + 25), Math.floor(Math.random() * 10 + 115)];

    io.emit('interval', rNumbers);
}, 5000);

server.listen(3001);
