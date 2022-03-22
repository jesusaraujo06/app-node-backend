const { dbConnection, mysql } = require('../../config/database');

const {
	colsCreate,
	colsUpdate,
	colsValue,
	getValues,
	getValuesAndId,
} = require('../../utils/handleQuery');

const { notDeleted } = {
	notDeleted: 'deleted = 0',
};

/**
 * Obtener todos los registros de una tabla
 * @param {*} table string
 */
const all = async table => {
	const query = `SELECT * FROM ${table} WHERE ${notDeleted}`;
	const format = mysql.format(query);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

/**
 * Obtener un registro basado en id de una tabla
 * @param {*} table string
 * @param {*} id string
 */
const find = async (table, id) => {
	const query = `SELECT * FROM ${table} WHERE id = ? and ${notDeleted}`;
	const format = mysql.format(query, [id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

/**
 * Crear un registro en una tabla
 * @param {*} table string
 * @param {*} cols array
 * @param {*} values object
 */
const create = async (table, cols, values) => {
	const query = `
	INSERT INTO ${table} (${colsCreate(cols)}) VALUES (${colsValue(cols)})`;
	const format = mysql.format(query, getValues(values));
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

/**
 * Actualizar un registro de una tabla
 * @param {*} table string
 * @param {*} cols array
 * @param {id} id string
 * @param {values} values object
 */
const update = async (table, cols, id, values) => {
	const query = `
	UPDATE ${table} SET ${colsUpdate(cols)} WHERE id = ? and ${notDeleted}`;
	const format = mysql.format(query, getValuesAndId(values, id));
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

/**
 * Eliminar un registro de forma logica de una tabla
 * @param {*} table string
 * @param {*} id string
 */
const deleteOne = async (table, id) => {
	const query = `UPDATE ${table} SET deleted = ? WHERE id = ?`;
	const format = mysql.format(query, [1, id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

/**
 * Eliminar un registro de forma permanente de una tabla
 * @param {*} table string
 * @param {*} string
 */
const remove = async (table, id) => {
	const query = `DELETE FROM ${table} WHERE id = ?`;
	const format = mysql.format(query, [id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

module.exports = {
	all,
	find,
	create,
	update,
	deleteOne,
	remove,
	dbConnection,
	mysql,
};
