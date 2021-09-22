const booksController = {};
const Book = require('../models/Book');

// home
booksController.renderIndex = async (req, res) => {
	let searchResultsArray = [];
	const query = req.query.search;
	// BUSQUEDA
	if (query) {
		const searchResults = await Book.find({
			title: { $regex: '.*' + query + '.*', $options: 'i' },
		}).lean();
		searchResultsArray = searchResults;
	}

	// RECOMENDADOS
	const books = await Book.find({
		$and: [{ stars: { $exists: true } }, { stars: { $gte: 3 } }],
	})
		.sort({ stars: -1 })
		.lean();

	res.render('index', { books, searchResultsArray, query });
};

// estanterias
booksController.renderShelfs = async (req, res) => {
	const shelf = req.query.shelf;
	const shelfsArray = await Book.find({ shelf: shelf }).lean();
	res.render('shelfs', { shelfsArray });
};

booksController.renderAbout = (req, res) => {
	res.render('about');
};

module.exports = booksController;
