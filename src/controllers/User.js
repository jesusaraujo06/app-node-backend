// Modelo
const { UserModel } = require('../models/index');

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
	const { body } = req;
	const result = await UserModel.create(body);
	res.json(result);
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
