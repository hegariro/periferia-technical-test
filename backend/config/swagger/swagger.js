const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Opciones de configuración para Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentación',
      version: '1.0.0',
      description: 'Documentación de la API para Periferia',
    },
    servers: [
      {
        url: 'http://localhost:4000', // Cambia esto según tu entorno
      },
    ],
  },
  apis: [
    './src/routes.js', 
    './src/likes/routes/likes.js',
    './src/publication/routes/publish.js',
    './src/session/routes/auth.js',
    './src/user_profile/routes/profile.js',
  ], // Ruta a los archivos de rutas donde defines tus endpoints
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
