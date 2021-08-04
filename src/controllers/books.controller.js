const booksController = {};
const Book = require('../models/Book');
// home
booksController.renderIndex = async (req, res) => {
	console.log('esto es reqbody: ', req.body);
	const books = await Book.find({
		$and: [{ stars: { $exists: true } }, { stars: { $gte: 3 } }],
	}).lean();

	res.render('index', { books });
};

booksController.renderSearchResults = (req, res) => {
	res.send('renderSearchResults');
};

booksController.renderMyBooks = (req, res) => {
	res.send('mybooks');
};

booksController.renderSettings = (req, res) => {
	res.send('settings');
};

module.exports = booksController;
