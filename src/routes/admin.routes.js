const express = require('express');
const router = express.Router();
const {
	renderAdminHome,
	renderAdminLogin,
	renderAdminLoginPost,
} = require('../controllers/admin.controller');

router.get('/admin', renderAdminHome);
router.get('/admin/login', renderAdminLogin);
router.post('/admin/login', renderAdminLoginPost);

module.exports = router;
