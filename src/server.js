const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// inicializaciones-------------------------
const app = express();

// configuraciones--------------------------
// contrasenia,lee datos de form
app.use(express.urlencoded({ extended: true }));

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
app.use(require('./routes/admin.routes'));
app.use(require('./routes/books.routes'));

// archivos estaticos--------------------------
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;
