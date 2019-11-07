const express = require('express');
const bodyParser = require('body-parser')
// const routers = require('./routers');

const app = express();

app.set('view engine', 'pug');
// app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const product = require('./modules/product')

app.use('/', product);

module.exports = app;