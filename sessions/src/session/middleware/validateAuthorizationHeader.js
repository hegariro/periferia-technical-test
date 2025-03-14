const jwt = require('jsonwebtoken');

function validateAuthorizationHeader(req, res, next) {
  try {
    // Obtener el token de la cabecera Authorization
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ error: 'No se proporcionó la cabecera Authorization' });
    }

    // El token debe estar en formato "Bearer <token>"
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Formato de autorización inválido' });
    }

    // Verificar el token con la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adjuntar los datos decodificados del token al objeto `req`
    req.user = decoded;
    console.info('Token validado para usuario ', req.user.userId);

    // Continuar con la siguiente función middleware o ruta
    next();
  } catch (error) {
    console.error('Error al validar el token:', error.message);

    // Manejar errores específicos de JWT
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ error: 'El token ha expirado' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ error: 'El token es inválido' });
    }

    // Error genérico
    return res.status(500).json({ error: 'Error al procesar el token' });
  }
}

module.exports = validateAuthorizationHeader;
