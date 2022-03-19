/**
 * * Dependencias
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

/**
 * * Variables
 */

const app = express();
const port = process.env.PORT || 3000;

/**
 * * Configuración
 */

// Habilitar cors para la API
app.use(cors());
// Mostrar datos json en consola
app.use(express.json());
// Habilitar router
app.use('/api', router);
// Determinar archivos estaticos
app.use(express.static('src/storage'));

/**
 * * Ejecutación
 */
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
