// const { dbConnection, mysql } = require('../../config/database');

// const table = 'images';

// const create = async ({ name, url }) => {
// 	const query = `INSERT INTO ${table} (name, path) VALUES (?, ?)`;
// 	const format = mysql.format(query, [name, url]);
// 	const execute = await dbConnection.query(format);

// 	return execute;
// };

function create({ name, url }) {
	return 'registro insertado';
}

module.exports = {
	create,
};
