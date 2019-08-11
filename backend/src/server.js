const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const auth = require('./config/dbconfig');

const server = express();

const {login, password} = auth;

const url = `mongodb+srv://${login}:${password}@cluster0-fakef.mongodb.net/omnistack8?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser : true
});

console.log('Connected to the database!');

server.use(cors());
server.use(express.json());
server.use(routes);

console.log('Server ready!');

server.listen(3333);