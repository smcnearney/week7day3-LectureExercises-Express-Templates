'use strict'

const HTTP = require('http');
const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine'); //define what the engine is
//app.engine takes two arguments, the filetype and the engine
app.engine('html', es6Renderer); //if you need an engine for html, use es6Renderer
app.set('views', 'templates'); //telling it where our views will be (templates folder)
app.set('view engine', 'html') //when you load your view engine, call the html engine (defined on line 12)

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
})

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController);
app.use('/friends', friendsController);

