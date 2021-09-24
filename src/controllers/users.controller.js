const usersController = {};
const User = require('../models/User');
const passport = require('passport');
// signup--------
usersController.renderSignUpForm = (req, res) => {
	res.render('users/signup');
};
usersController.signup = async (req, res) => {
	let errors = [];
	const { username, password, confirm_password } = req.body;
	if (password != confirm_password) {
		errors.push({
			text: 'contra no coinciden',
		});
	}
	if (password.length < 5) {
		errors.push({
			text: 'contra corta. tiene q ser mayor de 5 caract',
		});
	}
	if (errors.length > 0) {
		console.log(errors);
		res.render('users/signup', { errors, username });
	} else {
		// email de bdatos y el q puso user
		const emailUser = await User.findOne({ username: username });
		if (emailUser) {
			res.redirect('/users/signup');
		} else {
			const newUser = await new User({ username, password });
			newUser.password = await newUser.encryptPassword(password);
			await newUser.save();
			res.redirect('/users/signin');
		}
	}
};
// signin-------
usersController.renderSignInForm = (req, res) => {
	res.render('users/signin');
};
usersController.signin = (req, res, next) => {
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.redirect('/users/signin');
		}
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			if (user.username === 'admin') {
				return res.redirect('/admin');
			}
			return res.redirect('/');
		});
	})(req, res, next);
};
// logout
usersController.logout = (req, res) => {
	req.logout();
	res.redirect('/users/signin');
};
usersController.userProfile = async (req, res) => {
	const userr = await User.findOne({ username: req.params.user }).lean();
	res.render('users/profile', { userr });
};
usersController.settings = async (req, res) => {
	res.render('users/settings');
};

module.exports = usersController;
