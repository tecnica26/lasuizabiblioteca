const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// inicializaciones-------------------------
const app = express();

// configuraciones--------------------------
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');

// archivos estaticos--------------------------
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
