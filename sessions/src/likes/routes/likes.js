const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../../session/middleware/validateAuthorizationHeader');
const prismaService = require('../../shared/services/prismaService');
const LikesController = require('../controllers/LikesController');

const likesController = new LikesController(prismaService);

router.get('/', authorizationMiddleware, likesController.getLikesByUser.bind(likesController));
router.post('/', authorizationMiddleware, likesController.setLike.bind(likesController));
router.get('/all', authorizationMiddleware, likesController.getLikes.bind(likesController));

module.exports = router;
