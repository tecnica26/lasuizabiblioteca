const usersController = {};
const passport = require('passport');
const Book = require('../models/Book');

// admin
usersController.admin = async (req, res, next) => {
	passport.authenticate('local', async function (err, user, info) {
		if (req.user.username !== 'admin') {
			res.redirect('/');
		} else {
			// obtener estantes/libros
			const shelf = req.query.shelf;
			const shelfsArrayAdmin = await Book.find({ shelf: shelf }).lean();
			// agregar libro
			try {
				const { title, author, editorial, shelf, quantity, imageUrl, stars } =
					req.body;
				const newBook = new Book({
					title,
					author,
					editorial,
					shelf,
					quantity,
					imageUrl,
					stars,
				});
				await newBook.save();
			} catch (err) {
				// console.log(err);
			}
			res.render('admin', { shelfsArrayAdmin, shelf });
		}
	})(req, res, next);
};
// editar
usersController.bookedit = async (req, res, next) => {
	passport.authenticate('local', async function (err, user, info) {
		if (req.user.username !== 'admin') {
			res.redirect('/');
		} else {
			const libro = await Book.findById(req.params.id).lean();
			res.render('admin/edit', { libro: libro });
		}
	})(req, res, next);
};
usersController.updatebook = async (req, res) => {
	const { title, author, editorial, shelf, quantity, imageUrl, stars } =
		req.body;
	await Book.findByIdAndUpdate(req.params.id, {
		title,
		author,
		editorial,
		shelf,
		quantity,
		imageUrl,
		stars,
	});

	res.redirect('/admin');
};
// eliminar
usersController.deletebook = async (req, res, next) => {
	passport.authenticate('local', async function (err, user, info) {
		if (req.user.username !== 'admin') {
			res.redirect('/');
		} else {
			await Book.findByIdAndDelete(req.params.id);
			res.redirect('/admin');
		}
	})(req, res, next);
};
module.exports = usersController;
