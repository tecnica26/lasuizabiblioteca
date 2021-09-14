const express = require('express');
const router = express.Router();

const {
	renderIndex,
	renderSearchResults,
	renderMyBooks,
	renderSettings,
	renderShelfs,
	renderAbout
} = require('../controllers/books.controller');

// home
router.get('/', renderIndex);

// about
router.get('/about', renderAbout);

// busqueda
// router.get('/search/title/:searchQuery', renderSearchResults);

// estanterias
router.get('/estanterias', renderShelfs);

// mis libros
router.get('/:username/books', renderMyBooks);

// configs
router.get('/settings', renderSettings);

module.exports = router;
