const db = require('./main');

// Constantes del modelo
const { table, cols } = {
	table: 'images',
	cols: ['name', 'path'],
};

/**
 * Obtener todos los registros de una tabla
 */
const all = async () => {
	return await db.all(table);
};

/**
 * Obtener un registro basado en id de una tabla
 * @param {*} string
 */
const find = async id => {
	return await db.find(table, id);
};

/**
 * Crear un registro en una tabla
 * @param {*} object
 */
const create = async values => {
	return await db.create(table, cols, values);
};

/**
 * Actualizar un registro de una tabla
 * @param {id} string
 * @param {values} object
 */
const update = async (id, values) => {
	return await db.update(table, cols, id, values);
};

/**
 * Eliminar un registro de forma logica de una tabla
 * @param {*} string
 */
const deleteOne = async id => {
	return await db.deleteOne(table, id);
};

/**
 * Eliminar un registro de forma permanente de una tabla
 * @param {*} string
 */
const destroy = async id => {
	return await db.remove(table, id);
};

module.exports = {
	all,
	find,
	create,
	update,
	deleteOne,
	destroy,
};
