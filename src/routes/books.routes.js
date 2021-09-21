const express = require('express');
const router = express.Router();

const {
	renderIndex,
	renderMyBooks,
	renderSettings,
	renderShelfs,
	renderAbout,
} = require('../controllers/books.controller');
const { isAuthenticated } = require('../helpers/auth');

// home
router.get('/', renderIndex);

// about
router.get('/about', renderAbout);

// estanterias
router.get('/estanterias', renderShelfs);

// mis libros
router.get('/:username/books', isAuthenticated, renderMyBooks);

// configs
router.get('/settings', isAuthenticated, renderSettings);

module.exports = router;
