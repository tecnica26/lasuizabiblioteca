const express = require('express');
const router = express.Router();

const {
	renderSignUpForm,
	signup,
	renderSignInForm,
	signin,
	logout,
} = require('../controllers/users.controller');
const { isAuthenticated } = require('../helpers/auth');
router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', signin);

router.get('/users/logout', isAuthenticated, logout);
module.exports = router;
