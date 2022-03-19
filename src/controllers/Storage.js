// Modelo
const { StorageModel } = require('../models/index');

/**
 * Obtener todos los registros
 * @param {*} req
 * @param {*} res
 */
const index = (req, res) => {
	res.send({ usersExample: [1, 2, 3] });
};

/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const show = (req, res) => {};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const store = async (req, res) => {
	const { body, file } = req;
	const fileData = {
		filename: file.filename,
	};
	const result = await StorageModel.create(body);
	res.json(file);
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const update = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const destroy = (req, res) => {};

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
};
