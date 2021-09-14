const booksController = {};
const Book = require('../models/Book');
// home
booksController.renderIndex = async (req, res) => {
	let searchResultsArray=[];
	if (req.query.search) {
		const searchResults = await Book.find({
			title: { $regex: '.*' + req.query.search + '.*', $options: 'i' },
		}).lean();
		searchResultsArray= searchResults;
	}

console.log(searchResultsArray,"searchResultsArray");

	const books = await Book.find({
		$and: [{ stars: { $exists: true } }, { stars: { $gte: 3 } }],
	}).lean();

	
	res.render('index', { books,searchResultsArray });
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
