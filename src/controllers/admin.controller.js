const adminController = {};
const passport = require('passport');
adminController.renderAdminHome = (req, res) => {
	// si esta logueado
	res.send('adminnn login');
	// si no esta logueado.
};

adminController.renderAdminLogin = (req, res) => {
	// formulario
	res.render('admin');
};
adminController.renderAdminLoginPost = passport.authenticate('local', {
	failureRedirect: '/admin/login',
	successRedirect: '/admin',
});

module.exports = adminController;
