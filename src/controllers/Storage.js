// Modelo
const { StorageModel } = require('../models/index');
const { httpError } = require('../utils/handleError');

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
const show = async (req, res) => {};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const store = async (req, res) => {
	try {
		const { file } = req;
		const body = {
			filename: file.filename,
			url: `${process.env.APP_URI}/${file.filename}`,
		};
		const result = await StorageModel.create(body);
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_CREATE_ITEM', 403);
	}
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const update = async (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const destroy = async (req, res) => {};

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
};
