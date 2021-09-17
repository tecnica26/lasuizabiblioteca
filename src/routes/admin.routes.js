const express = require('express');
const router = express.Router();
const { renderAdminHome } = require('../controllers/admin.controller');
router.get('/admin', renderAdminHome);
module.exports = router;
