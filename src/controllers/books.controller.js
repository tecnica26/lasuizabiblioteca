const booksController = {};
const Book = require('../models/Book');
const User = require('../models/User');
const passport = require('passport');
const { findOne } = require('../models/Book');
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
booksController.likebook = async (req, res, next) => {
	passport.authenticate('local', async function (err, user, info) {
		if (err) {
			return next(err);
		}

		const id = req.params.id;
		const book = await Book.findById({ _id: id }).lean();

		delete book.stars;
		delete book.updatedAt;
		await Book.findOneAndUpdate({ _id: id }, { $inc: { stars: 1 } });
		await User.findOneAndUpdate(
			{ _id: req.user._id },
			{ $addToSet: { likes: book } }
		);
		res.redirect('/');
	})(req, res, next);
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
