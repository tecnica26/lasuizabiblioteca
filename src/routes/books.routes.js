const express = require('express');
const router = express.Router();

const {
	renderIndex,
	renderShelfs,
	renderAbout,
} = require('../controllers/books.controller');

// home
router.get('/', renderIndex);

// about
router.get('/about', renderAbout);

// estanterias
router.get('/estanterias', renderShelfs);

// mis libros

// configs

module.exports = router;
