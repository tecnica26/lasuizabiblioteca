const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
// mensajes
const session = require('express-session');

// contrasenia validacion
const passport = require('passport');
// inicializaciones-------------------------
const app = express();
require('./config/passport');
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

// lee datos del form cada vez que llegue datos,q los trate de convertir en json
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: 'seceoetroo',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());
// rutas
app.use(require('./routes/admin.routes'));
app.use(require('./routes/books.routes'));

// archivos estaticos--------------------------
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;
