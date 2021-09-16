const express = require('express');
const router = express.Router();
const {
	renderAdminHome,
	renderAdminLogin,
} = require('../controllers/admin.controller');

router.get('/admin', renderAdminHome);
router.get('/admin/login', renderAdminLogin);
router.post('/admin/login', renderAdminLogin);

module.exports = router;
