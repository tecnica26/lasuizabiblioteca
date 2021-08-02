const express = require('express');

// inicializaciones-------------------------
const app = express();

// configuraciones--------------------------
app.set('port', process.env.PORT || 3000);
app.set('view engine', '.hbs');

module.exports = app;
