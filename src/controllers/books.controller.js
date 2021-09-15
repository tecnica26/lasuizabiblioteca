const booksController = {};
const Book = require('../models/Book');
// home
booksController.renderIndex = async (req, res) => {
	let searchResultsArray = [];
	// BUSQUEDA
	if (req.query.search) {
		const searchResults = await Book.find({
			title: { $regex: '.*' + req.query.search + '.*', $options: 'i' },
		}).lean();
		searchResultsArray = searchResults;
	}
	console.log(searchResultsArray);
	// RECOMENDADOS
	const books = await Book.find({
		$and: [{ stars: { $exists: true } }, { stars: { $gte: 3 } }],
	}).lean();

	res.render('index', { books, searchResultsArray });
};

booksController.renderMyBooks = (req, res) => {
	res.send('mybooks');
};

// estanterias
booksController.renderShelfs = async (req, res) => {
	const shelfsArray = await Book.find({ shelf: 9 }).lean();
	res.render('shelfs', { shelfsArray });
};

booksController.renderSettings = (req, res) => {
	res.send('settings');
};

booksController.renderAbout = (req, res) => {
	res.render('about');
};

module.exports = booksController;
