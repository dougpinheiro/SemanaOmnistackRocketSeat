const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const authentication = require('./config/dbconfig');

const server = express();

mongoose.connect(`mongodb+srv://${authentication.login}:${authentication.login}@cluster0-fakef.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser : true
});


server.use(cors);
server.use(express.json());
server.use(routes);

server.listen(3333);