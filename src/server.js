const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
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

// middlewares-funciones q se ejecutan a medida que van llegnado peticiones---------------
// cada vez que llegue datos,q los trate de convertir en json
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// var globales
app.use((req, res, next) => {
	res.locals.user = req.user || null;
	next();
});

// rutas
app.use(require('./routes/books.routes'));
app.use(require('./routes/users.routes'));

// archivos estaticos--------------------------
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;
