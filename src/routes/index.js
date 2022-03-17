/**
 * * Este archivo se encarga de cargar las rutas dinamicamente
 */

import { Router } from 'express';
import { readdirSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { fileURLToPath } from 'url';
import path from 'path';

// import routerStorage from './storage.js';
const router = Router();

// Obtener path del directorio
const { pathname: pathRouter } = new URL('../routes', import.meta.url, 'utf-8');
// console.log(pathRouter);

const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const __dirname = path.resolve('src/routes/');

console.log('rutaaaa', __dirname);

/**
 * Con split() dividimos un string por un caracter en este caso un punto.
 * split() nos retorna un array y con shift() elimina el primer elemento del array y lo retorna.
 * @param {*} fileName
 * @returns Nombre sin extensióm
 */
const removeExtension = fileName => {
	return fileName.split('.').shift();
};

// Obtener cada archivo que se encuentre en la ruta path
readdirSync(__dirname).filter(file => {
	const fileName = removeExtension(file);
	console.log(fileName);

	/**
	 * includes() revisa si el valor que venga de fileName se encuentra en el array
	 * Si lo encuentra retorna true, de lo contrario false.
	 */
	const skipFile = ['index'].includes(fileName);
	if (!skipFile) {
		// Establece la ruta
		let filePath = `${path.resolve('src/routes/' + fileName)}.js`;
		console.log(filePath);

		// console.log(require);
		router.use(`/${fileName}`, require(`./${fileName}.js`));
	}
});

// En caso de que no encuentre la ruta especificada
router.get('*', (req, res) => {
	res.status(404);
	res.send({ error: 'Ruta no encontrada.' });
});

export default router;
