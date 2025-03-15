const express = require('express');
const mainRoutes = require('./src/routes.js');
const swaggerSetup = require('./swagger'); // Importa la configuración de Swagger

const app = express();
app.use(express.json());
app.use('/api', mainRoutes); // Usa /api como prefijo para todas las rutas

// Configurar Swagger
swaggerSetup(app);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
