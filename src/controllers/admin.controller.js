const adminController = {};
const Book = require('../models/Book');
adminController.renderAdminHome = (req, res) => {
	res.send('adminnn');
};
module.exports = adminController;
