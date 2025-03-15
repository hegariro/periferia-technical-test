const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../../session/middleware/validateAuthorizationHeader');
const prismaService = require('../../shared/services/prismaService');
const UserProfileController = require('../controllers/userProfileController');

const userProfileController = new UserProfileController(prismaService);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Obtener perfil del usuario autenticado
 *     description: Retorna los datos del perfil del usuario autenticado a partir del token JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Datos del perfil del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del usuario.
 *                 nickname:
 *                   type: string
 *                   description: Nickname del usuario.
 *                 profileImage:
 *                   type: string
 *                   description: URL de la imagen de perfil del usuario.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación del perfil.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de última actualización del perfil.
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
router.get('/', authorizationMiddleware, userProfileController.getProfile.bind(userProfileController));

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Crea perfil del usuario autenticado
 *     description: Crea el perfil del usuario autenticado a partir del token JWT. Es diferente al registro de usuarios.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: Nuevo nickname del usuario.
 *               profileImage:
 *                 type: string
 *                 description: Nueva URL de la imagen de perfil del usuario.
 *     responses:
 *       200:
 *         description: Datos del perfil del usuario actualizado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del usuario.
 *                 nickname:
 *                   type: string
 *                   description: Nickname del usuario.
 *                 profileImage:
 *                   type: string
 *                   description: URL de la imagen de perfil del usuario.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación del perfil.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de última actualización del perfil.
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
router.post('/', authorizationMiddleware, userProfileController.setProfile.bind(userProfileController));

module.exports = router;
