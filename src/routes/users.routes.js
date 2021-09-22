const express = require('express');
const router = express.Router();

const {
	renderSignUpForm,
	signup,
	renderSignInForm,
	signin,
	logout,
	admin,
	// adminedit,
} = require('../controllers/users.controller');
const { isAuthenticated } = require('../helpers/auth');
router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', signin);

router.get('/users/logout', isAuthenticated, logout);

router.get('/admin', isAuthenticated, admin);
router.post('/admin', isAuthenticated, admin);
// router.put('/admin', isAuthenticated, adminedit);

module.exports = router;
