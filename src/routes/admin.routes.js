const express = require('express');
const router = express.Router();

const {
	admin,
	bookedit,
	updatebook,
	deletebook,
} = require('../controllers/admin.controller');
const { isAuthenticated } = require('../helpers/auth');

// crear
router.get('/soyadmin', isAuthenticated, admin);
router.post('/soyadmin', isAuthenticated, admin);

// editar
router.get('/soyadmin/edit/:id', isAuthenticated, bookedit);
router.put('/soyadmin/book-edit/:id', isAuthenticated, updatebook);

router.delete('/soyadmin/delete/:id', isAuthenticated, deletebook);
module.exports = router;
