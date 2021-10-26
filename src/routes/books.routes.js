const express = require('express');
const router = express.Router();

const {
	renderIndex,
	renderShelfs,
	renderAbout,
	likebook,
	renderAllBooks,
} = require('../controllers/books.controller');
const { isAuthenticated } = require('../helpers/auth');

// home
router.get('/', renderIndex);
router.post('/like/:id', isAuthenticated, likebook);

// about
router.get('/about', renderAbout);

// estanterias
router.get('/estanterias', renderShelfs);

// estanterias
router.get('/todo', renderAllBooks);

module.exports = router;
