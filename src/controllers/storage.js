// Modelo
import { storageModel } from '../models/index.cjs';

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
	const { body, file } = req;
	const fileData = {
		filename: file.filename,
	};
	// const result = await storageModel.insert(body);
	res.json({ file });
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

export default {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
};
