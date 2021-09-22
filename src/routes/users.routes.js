const express = require('express');
const router = express.Router();

const {
	renderSignUpForm,
	signup,
	renderSignInForm,
	signin,
	logout,
	admin,
	bookedit,
	updatebook,
	deletebook,
} = require('../controllers/users.controller');
const { isAuthenticated } = require('../helpers/auth');
router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', signin);

router.get('/users/logout', isAuthenticated, logout);

// crear
router.get('/admin', isAuthenticated, admin);
router.post('/admin', isAuthenticated, admin);

// editar
router.get('/admin/edit/:id', bookedit);
router.put('/admin/book-edit/:id', updatebook);

router.delete('/admin/delete/:id', deletebook);
module.exports = router;
