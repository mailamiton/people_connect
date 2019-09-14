const express = require('express')
const path = require('path');
const routes = require('./src/routes/index');

const app = express()
global.__basedir = __dirname;

app.use(express.static(path.join(__basedir, 'public')));
app.use("/", routes)


module.exports = app;