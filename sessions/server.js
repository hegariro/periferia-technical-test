const express = require('express');
const app = express();
const mainRoutes = require('./src/routes.js');

app.use(express.json());
app.use('/api', mainRoutes); // Usa /api como prefijo para todas las rutas

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
