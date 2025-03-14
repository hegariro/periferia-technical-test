const express = require('express');
const router = express.Router();
const sessionRoutes = require('./init_session/routes/auth.js');
const profileRoutes = require('./user_profile/routes/profile.js');

router.use('/auth', sessionRoutes);
router.use('/profile', profileRoutes);

module.exports = router;