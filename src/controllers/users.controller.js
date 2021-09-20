const usersController = {};

usersController.renderSignUpForm = (req, res) => {
	res.render('users/signup');
};
usersController.signup = (req, res) => {
	console.log(req.body, 'req.bidy', req.query);
	res.send('recibibiibibibod');
};
usersController.renderSignInForm = (req, res) => {
	res.send('users/innnnnnnnn');
};
usersController.signin = (req, res) => {
	res.send('users/signin');
};
usersController.logout = (req, res) => {
	res.send('users/sioutttttttttt');
};
module.exports = usersController;
