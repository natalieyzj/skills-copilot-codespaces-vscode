// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create web server
const http = require('http');
const server = http.createServer(app);

// Create socket server
const socketIo = require('socket.io');
const io = socketIo(server);

// Create comments array
const comments = [
    { id: 1, author: 'John', content: 'Hello, World!' },
    { id: 2, author: 'Jane', content: 'Hi, there!' },
];

// Handle GET request
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Handle POST request
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    io.emit('new-comment', comment);
    res.send(comment);
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});