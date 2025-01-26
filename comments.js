// creat web serve
const express = require('express');
const app = express();
const port = 3000;

// get comments
app.get('/comments', (req, res) => {
    res.send('GET comments!');
});

// post comments
app.post('/comments', (req, res) => {
    res.send('POST comments!');
});

// put comments
app.put('/comments', (req, res) => {
    res.send('PUT comments!');
});

// delete comments
app.delete('/comments', (req, res) => {
    res.send('DELETE comments!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// run the server
// node comments.js
// Server is running on port 3000

// GET comments!
// POST comments!
// PUT comments!
// DELETE comments!
// GET comments!
// POST comments!
// PUT comments!
// DELETE comments!