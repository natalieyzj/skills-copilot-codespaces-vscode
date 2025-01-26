// Create web serve
// 1. import express
// 2. create an express instance
// 3. create the first route
// 4. start the server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 5. test the server
// run the server by running node comments.js
// go to a browser and type localhost:3000
// you should see Hello World

// 6. create a route that returns a list of comments
app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John Doe', body: 'This is a comment' },
    { id: 2, author: 'Jane Doe', body: 'This is another comment' },
  ]);
});

// 7. test the comments route
// go to a browser and type localhost:3000/comments
// you should see the list of comments

// 8. create a route that returns a single comment
app.get('/comments/:id', (req, res) => {
  const comment = {
    id: 1,