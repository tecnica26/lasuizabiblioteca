const express = require('express');
const router = express.Router();

const {
	renderSignUpForm,
	signup,
	renderSignInForm,
	signin,
	logout,
	userProfile,
	renderSettings,
	settings,
	deleteAccount,
} = require('../controllers/users.controller');
const { isAuthenticated } = require('../helpers/auth');
router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', signin);

router.get('/users/logout', isAuthenticated, logout);

router.get('/settings', isAuthenticated, renderSettings);
router.post('/settings/:id', isAuthenticated, settings);

router.get('/delete/yes', isAuthenticated, deleteAccount);
router.get('/p/:user', userProfile);
module.exports = router;
