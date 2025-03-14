const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const JwtService = require('../../shared/services/jwtService');
const prismaService = require('../../shared/services/prismaService');
const authorizationMiddleware = require('../middleware/validateAuthorizationHeader');

const jwtService = new JwtService();

const authController = new AuthController(prismaService, jwtService);

router.post('/login', authController.login.bind(authController));
router.post('/register', authController.register.bind(authController));
router.post('/logout', authorizationMiddleware, authController.logout.bind(authController));

module.exports = router;