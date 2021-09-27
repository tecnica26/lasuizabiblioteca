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
router.get('/admin', isAuthenticated, admin);
router.post('/admin', isAuthenticated, admin);

// editar
router.get('/admin/edit/:id', isAuthenticated, bookedit);
router.put('/admin/book-edit/:id', isAuthenticated, updatebook);

router.delete('/admin/delete/:id', isAuthenticated, deletebook);
module.exports = router;
