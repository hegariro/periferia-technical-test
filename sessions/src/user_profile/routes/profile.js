const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../../session/middleware/validateAuthorizationHeader');
const JwtService = require('../../shared/services/jwtService');
const prismaService = require('../../shared/services/prismaService');
const UserProfileController = require('../controllers/userProfileController');

const jwtService = new JwtService();

const userProfileController = new UserProfileController(prismaService);

router.get('/', authorizationMiddleware, userProfileController.getProfile.bind(userProfileController));
router.post('/', authorizationMiddleware, userProfileController.setProfile.bind(userProfileController));

module.exports = router;
