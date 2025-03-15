const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../../session/middleware/validateAuthorizationHeader');
const prismaService = require('../../shared/services/prismaService');
const LikesController = require('../controllers/LikesController');

const likesController = new LikesController(prismaService);

/**
 * @swagger
 * /api/likes:
 *   get:
 *     summary: Obtener los likes del usuario autenticado
 *     description: Retorna una lista de los likes realizados por el usuario autenticado. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de likes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del like.
 *                   publication:
 *                     type: integer
 *                     description: ID de la publicación que se liked.
 *                   user:
 *                     type: integer
 *                     description: ID del usuario que realizó el like.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación del like.
 *       401:
 *         description: No autorizado. El token JWT no es válido o no se proporcionó.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
router.get('/', authorizationMiddleware, likesController.getLikesByUser.bind(likesController));

/**
 * @swagger
 * /api/likes:
 *   post:
 *     summary: Crear un nuevo like
 *     description: Crea un nuevo like para una publicación específica. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publicationId:
 *                 type: integer
 *                 description: ID de la publicación que se va a "likear".
 *     responses:
 *       201:
 *         description: Like creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del like.
 *                 publication:
 *                   type: integer
 *                   description: ID de la publicación que se liked.
 *                 user:
 *                   type: integer
 *                   description: ID del usuario que realizó el like.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación del like.
 *       400:
 *         description: Solicitud incorrecta. Datos inválidos (por ejemplo, publicationId no es un entero).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *       401:
 *         description: No autorizado. El token JWT no es válido o no se proporcionó.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *       404:
 *         description: Publicación no encontrada. El publicationId proporcionado no existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
router.post('/', authorizationMiddleware, likesController.setLike.bind(likesController));

/**
 * @swagger
 * /api/likes/all:
 *   get:
 *     summary: Obtener los últimos 100 likes
 *     description: Retorna una lista de los últimos 100 likes creados en el sistema, ordenados por fecha de creación descendente. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de los últimos 100 likes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del like.
 *                   publication:
 *                     type: integer
 *                     description: ID de la publicación que se liked.
 *                   user:
 *                     type: integer
 *                     description: ID del usuario que realizó el like.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación del like.
 *       401:
 *         description: No autorizado. El token JWT no es válido o no se proporcionó.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
router.get('/all', authorizationMiddleware, likesController.getLikes.bind(likesController));

module.exports = router;
