const express = require('express');
const router = express.Router();

const {
	renderIndex,
	renderSearchResults,
	renderMyBooks,
	renderSettings,
} = require('../controllers/books.controller');

// home
router.get('/', renderIndex);

// busqueda
// router.get('/search/title/:searchQuery', renderSearchResults);

// mis libros
router.get('/:username/books', renderMyBooks);

// configs
router.get('/settings', renderSettings);

module.exports = router;
