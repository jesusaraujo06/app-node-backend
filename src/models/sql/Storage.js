const {
	dbConnection,
	mysql,
} = require('../../config/database');

const { table, notDeleted } = {
	table: 'images',
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

const create = async ({ filename, url }) => {
	const query = `INSERT INTO ${table} (name, path) VALUES (?, ?)`;
	const format = mysql.format(query, [filename, url]);
	const [rows, fields] = await dbConnection.query(format);
	return rows;
};

const findOneAndUpdate = async (id, { user, clave }) => {
	const query = `UPDATE ${table} SET name = ?, path = ? WHERE id = ? and ${notDeleted}`;
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

// function create({ name, url }) {
// 	return 'registro insertado';
// }

module.exports = {
	all,
	create,
};
