/**
 * * Este archivo se encarga de cargar las rutas dinamicamente
 */

const express = require('express');
const fs = require('fs');
const apiRouter = express.Router();
const pathRouter = __dirname;

/**
 * Con split() dividimos un string por un caracter en este caso un punto.
 * split() nos retorna un array y con shift() elimina el primer elemento del array y lo retorna.
 * @param {*} fileName
 * @returns Nombre del archivo
 */
const removeExtension = fileName => {
	return fileName.split('.').shift();
};

// Obtener cada archivo que se encuentre en la ruta pathRouter
fs.readdirSync(pathRouter).filter(file => {
	const fileName = removeExtension(file);
	/**
	 * includes() revisa si el valor que venga de fileName se encuentra en el array
	 * Si lo encuentra retorna true, de lo contrario false.
	 */
	const skipFile = ['index'].includes(fileName);
	if (!skipFile) {
		apiRouter.use(`/${fileName}`, require(`./${fileName}`));
	}
});

// Ruta principal
apiRouter.get('/', (req, res) => {
	res.status(200);
	res.send({
		msg: 'Has iniciado correctamente la plantilla de backend en NodeJs, creado por Jesus Araujo, a continuación puedes empezar a contruir tu aplicación.',
		alert: 'Estas son las rutas api: /api',
	});
});

// En caso de que no se encuentre ninguna ruta
apiRouter.get('*', (req, res) => {
	res.status(404);
	res.send({ error: 'Ruta no encontrada desde API' });
});

module.exports = apiRouter;
