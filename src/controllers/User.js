// Modelo
const { matchedData } = require('express-validator');
const { UserModel } = require('../models/index');
const { httpError } = require('../utils/handleError');

/**
 * Obtener todos los registros
 * @param {*} req
 * @param {*} res
 */
const index = (req, res) => {
	try {
		const items = { item1: 'Jesus', item2: 'Leifer' };
		const result = items;
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
const show = (req, res) => {};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const store = async (req, res) => {
	try {
		const body = matchedData(req);
		const result = await UserModel.create(body);
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_CREATE_ITEMS', 403);
	}
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
