/**
 * * Este archivo se encarga de cargar las rutas dinamicamente
 */

const express = require('express');
const router = express.Router();
const fs = require('fs');

// Obtener path del directorio
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

// Obtener cada archivo que se encuentre en la ruta path
fs.readdirSync(pathRouter).filter(file => {
	const fileName = removeExtension(file);

	/**
	 * includes() revisa si el valor que venga de fileName se encuentra en el array
	 * Si lo encuentra retorna true, de lo contrario false.
	 */
	const skipFile = ['index'].includes(fileName);
	if (!skipFile) {
		router.use(`/${fileName}`, require(`./${fileName}`));
		// console.log('--->', removeExtension(fileName))
	}
});

// Si no se encuentra ninguna ruta
router.get('*', (req, res) => {
	res.status(404);
	res.send({ error: 'Ruta no encontrada' });
});

module.exports = router;
