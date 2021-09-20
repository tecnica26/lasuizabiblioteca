const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');
passport.use(
	new LocalStrategy(
		{
			usernameField: 'username',
			passwordField: 'password',
		},
		async (username, password, done) => {
			//si existte correo en bdatos
			const user = await User.findOne({ username });
			console.log(user, 'user encontrado por username q puso usuario');
			if (!user) {
				console.log('no encontre a ningyn user', user);
				return done(null, false, { message: 'no hay usuarios' });
			} else {
				const match = await user.matchPassword(password, user.password);
				// console.log('la contrasenia q pone el user es "', password, '"');
				if (match) {
					console.log('encontre al user y la contra coincide', user);
					return done(null, user);
				} else {
					console.log('la contra no coincide', user, password, user.password);
					return done(null, false, { message: 'contra falsa gil' });
				}
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});
// no entendiXD
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});
