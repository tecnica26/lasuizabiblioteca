const express = require('express');
const router = express.Router();

const {
	renderSettings,
	renderMyBooks,
} = require('../controllers/books.controller');

router.get('/settings', renderSettings);
router.get('/:username/books', renderMyBooks);

module.exports = router;
