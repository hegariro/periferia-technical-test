const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const JwtService = require('../../shared/services/jwtService');
const prismaService = require('../../shared/services/prismaService');
const authorizationMiddleware = require('../middleware/validateAuthorizationHeader');

const jwtService = new JwtService();
const authController = new AuthController(prismaService, jwtService);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     description: Inicia sesión de un usuario existente y retorna un token JWT.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso. Retorna token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticación.
 *       400:
 *         description: Solicitud incorrecta. Faltan parámetros requeridos o son inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *       401:
 *         description: Credenciales inválidas.
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
 */
router.post('/login', authController.login.bind(authController));

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     description: Registra un nuevo usuario en el sistema y retorna el id del usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *     responses:
 *       201:
 *         description: Registro exitoso. Retorna los datos del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id
 *                   type: int
 *                   description: Identificador único del usuario.
 *                 email
 *                   type: string
 *                   description: Correo electrónico.
 *                 password
 *                   type: string
 *                   description: Contraseña hasheada.
 *                 name
 *                   type: string
 *                   description: Nombre registrado.
 *                 createdAt
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación del registro.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de actualización del registro.
 *       400:
 *         description: Solicitud incorrecta. Faltan parámetros requeridos o son inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               error:
 *                 type: string
 *                 description: Mensaje de error.
 *       409:
 *         description: El correo electrónico ya está registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               error:
 *                 type: string
 *                 description: Mensaje de error.
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               error:
 *                 type: string
 *                 description: Mensaje de error.
 */
router.post('/register', authController.register.bind(authController));

/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Cerrar sesión del usuario
 *     description: Cierra la sesión del usuario, invalidando el token JWT actual.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Cierre de sesión exitoso. No se retorna contenido.
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
router.get('/logout', authorizationMiddleware, authController.logout.bind(authController));

module.exports = router;