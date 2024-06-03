const serverless = require('serverless-http');
const express = require('express');
const { createUserHandler, getUserHandler, updateUserHandler, deleteUserHandler, listUsersHandler } = require('./adapters/userController');

const app = express();

app.use(express.json());

app.post('/users', createUserHandler);
app.get('/users/:id', getUserHandler);
app.put('/users/:id', updateUserHandler);
app.delete('/users/:id', deleteUserHandler);
app.get('/users', listUsersHandler);

app.use((req, res) => {
  return res.status(404).json({ error: "Not Found" });
});

module.exports.handler = serverless(app);
