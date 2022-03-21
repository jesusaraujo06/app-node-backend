const { StorageModel } = require('../models/index');
const { httpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const fs = require('fs');

const PUBLIC_URI = process.env.APP_URI;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener todos los registros
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
	try {
		const result = await StorageModel.all();
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_GET_ITEMS', 403);
	}
};

/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const show = async (req, res) => {
	try {
		const { id } = matchedData(req);
		const result = await StorageModel.find(id);
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_GET_ITEM', 403);
	}
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const store = async (req, res) => {
	try {
		const { file } = req;
		const body = {
			name: file.filename,
			path: `${PUBLIC_URI}/${file.filename}`,
		};
		const result = await StorageModel.create(body);
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_CREATE_ITEM', 403);
	}
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const destroy = async (req, res) => {
	try {
		const { id } = matchedData(req);

		// * Habilitar en caso de que se requiera eliminar el archivo del storage
		// removeFileStorage(id);

		const result = await StorageModel.deleteOne(id);

		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_GET_ITEM', 403);
	}
};

/**
 * Eliminar permanentemente un archivo del storage
 * @param {*} id string
 * @returns
 */
const removeFileStorage = async id => {
	try {
		// Obtener nombre del archivo
		const data = await StorageModel.find(id);
		const { name } = data[0];
		// Eliminar archivo
		const filePath = `${MEDIA_PATH}/${name}`;
		fs.unlinkSync(filePath);
		return true;
	} catch (err) {
		return err;
	}
};

module.exports = {
	index,
	show,
	store,
	destroy,
};
