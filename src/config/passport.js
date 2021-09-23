const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const a = 3;
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
			if (!user) {
				console.log('no encontre a ningyn user', user);
				return done(null, false, { message: 'no hay usuarios' });
			} else {
				const match = await user.matchPassword(password, user.password);
				if (match) {
					return done(null, user, a);
				} else {
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
	}).lean();
});
