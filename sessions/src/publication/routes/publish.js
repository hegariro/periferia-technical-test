const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../../session/middleware/validateAuthorizationHeader');
const prismaService = require('../../shared/services/prismaService');
const PublishController = require('../controllers/publishController');

const publishController = new PublishController(prismaService);

router.get('/', authorizationMiddleware, publishController.getAllPublicationsByUser.bind(publishController));
router.post('/', authorizationMiddleware, publishController.setPublication.bind(publishController));
router.get('/landing', authorizationMiddleware, publishController.getAllPublications.bind(publishController));
router.get('/:id(\\d+)', authorizationMiddleware, publishController.getPublicationById.bind(publishController));

module.exports = router;
