const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// inicializaciones-------------------------
const app = express();

// app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
// configuraciones--------------------------
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');

// rutas
app.use(require('./routes/books.routes'));
app.use(require('./routes/users.routes'));

// archivos estaticos--------------------------
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;
