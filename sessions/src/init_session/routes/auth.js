const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const JwtService = require('../services/jwtService');
const prismaService = require('../services/prismaService');

const jwtService = new JwtService();

const authController = new AuthController(prismaService, jwtService);

router.post('/login', authController.login.bind(authController));
router.post('/register', authController.register.bind(authController));
//router.post('/logout', authController.logout.bind(authController));

module.exports = router;