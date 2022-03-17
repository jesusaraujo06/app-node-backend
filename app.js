// Dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Utilizar cors
app.use(cors());
// Recibir datos en json
app.use(express.json());

// const probandoDB = async () => {
//   const contacts = await promisePool.execute('SELECT * FROM usuario');
//   console.log(contacts[0]);
// }
// probandoDB();

// Cargar rutas de la API
app.use('/api', require('./src/routes/index'));

// Ejecutar servidor
app.listen(port, () => {
	console.log(`App lista en el puerto ${port}`);
});
