const {
	dbConnection,
	mysql,
} = require('../../config/database');

const { table, notDeleted } = {
	table: 'users',
	notDeleted: 'deleted = 0',
};

const all = async () => {
	const query = `SELECT * FROM ${table} WHERE ${notDeleted}`;
	const format = mysql.format(query);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

const find = async id => {
	const query = `SELECT * FROM ${table} WHERE id = ? and ${notDeleted}`;
	const format = mysql.format(query, [id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

const create = async ({ user, clave }) => {
	const query = `INSERT INTO ${table} (user, clave) VALUES (?, ?)`;
	const format = mysql.format(query, [user, clave]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

const findOneAndUpdate = async (id, { user, clave }) => {
	const query = `UPDATE ${table} SET user = ?, clave = ? WHERE id = ? and ${notDeleted}`;
	const format = mysql.format(query, [user, clave, id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

const deleteOne = async id => {
	const query = `UPDATE ${table} SET deleted = ? WHERE id = ?`;
	const format = mysql.format(query, [1, id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

const destroy = async id => {
	const query = 'DELETE FROM users WHERE id = ?';
	const format = mysql.format(query, [id]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

// function create({ user, clave }) {
// 	return 'Registro listo';
// }

module.exports = {
	all,
	find,
	create,
	findOneAndUpdate,
	deleteOne,
	destroy,
};
