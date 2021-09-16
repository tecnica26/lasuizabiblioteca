const adminController = {};
const Book = require('../models/Book');

adminController.renderAdminHome = (req, res) => {
	// si esta logueado
	res.render('admin');

	// si no esta logueado.
};

adminController.renderAdminLogin = (req, res) => {
	// formulario
	res.send('adminnn login');
};

adminController.renderAdminLogin = (req, res) => {
	// recibir datops
	res.send('adminnn login');
};

module.exports = adminController;
