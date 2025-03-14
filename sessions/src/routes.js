const express = require('express');
const router = express.Router();
const sessionRoutes = require('./session/routes/auth.js');
const profileRoutes = require('./user_profile/routes/profile.js');
const publicationsRoutes = require('./publication/routes/publish.js');

router.use('/auth', sessionRoutes);
router.use('/profile', profileRoutes);
router.use('/publications', publicationsRoutes);

module.exports = router;