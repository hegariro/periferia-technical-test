const express = require('express');
const authorizationMiddleware = require('../../session/middleware/validateAuthorizationHeader');
const prismaService = require('../../shared/services/prismaService');
const PublishController = require('../controllers/publishController');

const router = express.Router();
const publishController = new PublishController(prismaService);

/**
 * @swagger
 * /api/publications:
 *   get:
 *     summary: Obtener todas las publicaciones de un usuario
 *     description: Retorna una lista de todas las publicaciones de un usuario. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de publicaciones obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la publicación.
 *                   title:
 *                     type: string
 *                     description: Título de la publicación.
 *                   publisher:
 *                     type: string
 *                     description: Usuario que realizó la publicación.
 *                   content:
 *                     type: string
 *                     description: Contenido de la publicación.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación de la publicación.
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de última actualización de la publicación.
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
router.get('/', authorizationMiddleware, publishController.getAllPublicationsByUser.bind(publishController));

/**
 * @swagger
 * /api/publications:
 *   post:
 *     summary: Crear una nueva publicación
 *     description: Crea una nueva publicación en el sistema. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la publicación.
 *               content:
 *                 type: string
 *                 description: Contenido de la publicación.
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la publicación.
 *                 title:
 *                   type: string
 *                   description: Título de la publicación.
 *                 publisher:
 *                   type: string
 *                   description: Usuario que creó la publicación.
 *                 content:
 *                   type: string
 *                   description: Contenido de la publicación.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación de la publicación.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de última actualización de la publicación.
 *       400:
 *         description: Solicitud incorrecta. Datos inválidos.
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
router.post('/', authorizationMiddleware, publishController.setPublication.bind(publishController));

/**
 * @swagger
 * /api/publications/landing:
 *   get:
 *     summary: Obtener las últimas 100 publicaciones
 *     description: Retorna las últimas 100 publicaciones creadas, ordenadas por fecha de creación descendente. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de las últimas 100 publicaciones obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la publicación.
 *                   title:
 *                     type: string
 *                     description: Título de la publicación.
 *                   publisher:
 *                     type: string
 *                     description: Usuario creador de la publicación.
 *                   content:
 *                     type: string
 *                     description: Contenido de la publicación.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación de la publicación.
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de última actualización de la publicación.
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
router.get('/landing', authorizationMiddleware, publishController.getAllPublications.bind(publishController));

/**
 * @swagger
 * /api/publications/{id}:
 *   get:
 *     summary: Obtener una publicación por ID
 *     description: Retorna los datos de una publicación específica a partir de su ID. Requiere autenticación JWT.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la publicación a obtener. Debe ser un número entero.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Publicación obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la publicación.
 *                 title:
 *                   type: string
 *                   description: Título de la publicación.
 *                 publisher:
 *                   type: string
 *                   description: Editor de la publicación.
 *                 content:
 *                   type: string
 *                   description: Contenido de la publicación.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación de la publicación.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de última actualización de la publicación.
 *       400:
 *         description: Solicitud incorrecta. ID inválido.
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
 *         description: Publicación no encontrada.
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
router.get('/:id(\\d+)', authorizationMiddleware, publishController.getPublicationById.bind(publishController));

module.exports = router;
