const booksController = {};
const Book = require('../models/Book');
// home
booksController.renderIndex = async (req, res) => {
	if (req.query.search) {
		const searchResults = await Book.find({
			title: { $regex: '.*' + req.query.search + '.*', $options: 'i' },
		});
		console.log('searchResultssss', searchResults);
	}
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
