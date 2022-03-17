// Modelo
const { userModel } = require('../models/index');

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
	res.send({ usersExample: [1, 2, 3] });
};

/**
 * Obtener un elemento
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insertar un elemento
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	// res.json({hola: 'jesus'})
	const result = await userModel.insert({ user: 'jesus', clave: 'jesus2022' });
	res.json(result);
};

/**
 * Actualizar un elemento
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un elemento
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
};
