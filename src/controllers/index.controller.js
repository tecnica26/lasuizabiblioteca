const indexController = {};
const Book = require('../models/Book');

indexController.renderIndex = async (req, res) => {
	const books = await Book.find({
		$and: [{ stars: { $exists: true } }, { stars: { $gte: 3 } }],
	}).lean();

	res.render('index', { books });
};
indexController.renderAbout = (req, res) => {
	res.render('about');
};

module.exports = indexController;
