const express = require('express');
const router = express.Router();

const { renderAbout } = require('../controllers/index.controller');

router.get('/about', renderAbout);

module.exports = router;
