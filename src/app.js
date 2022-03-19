/**
 * * Dependencias
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api/index');
const webRouter = require('./routes/web/index');

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
// Determinar archivos estaticos
app.use(express.static('src/storage'));
// Habilitar router
app.use('/api', apiRouter);
app.use('/', webRouter);

/**
 * * Ejecución
 */
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
