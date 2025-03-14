const express = require('express');
const router = express.Router();
const sessionRoutes = require('./init_session/routes/auth.js');

router.use('/auth', sessionRoutes);

module.exports = router;