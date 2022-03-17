/**
 * * Dependencias
 */
import { config } from 'dotenv';
config();
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

/**
 * * Configuración del servidor
 */
// Utilizar cors
app.use(cors());
// Recibir datos en json
app.use(express.json());
// Archivos estaticos
app.use(express.static('storage'));
// Cargar rutas
app.use('/api', router);

/**
 * * Ejecución del servidor
 */
app.listen(process.env.APP_PORT || 3000, () => {
	console.log(`App lista en el puerto ${process.env.APP_PORT}`);
});
