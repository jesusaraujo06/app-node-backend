// Modelo
const { UserModel } = require('../models/index');
const { httpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');

/**
 * Obtener todos los registros
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
	try {
		const result = await UserModel.all();
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
		const body = matchedData(req);
		const { id } = body;
		const result = await UserModel.find(id);
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_GET_ITEM');
	}
};

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
		httpError(res, 'ERROR_CREATE_ITEM', 403);
	}
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const update = async (req, res) => {
	try {
		// De un objeto creamos dos objetos, uno que solo va a tener el id y otro que tendra el resto de elementos del objeto
		const { id, ...body } = matchedData(req);
		const result = await UserModel.findOneAndUpdate(
			id,
			body
		);
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
		const body = matchedData(req);
		const { id } = body;
		// Con deleteOne se hará un borrado logico, para destruir un registro utilizar destroy()
		const result = await UserModel.deleteOne(id);
		res.send({ result });
	} catch (err) {
		httpError(res, 'ERROR_DELETE_ITEM', 403);
	}
};

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
};
