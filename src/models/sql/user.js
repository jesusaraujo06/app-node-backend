const { dbConnection, mysql } = require('../../config/database');

const create = async ({ user, clave }) => {
	const query = 'INSERT INTO users (user, clave) VALUES (?, ?)';
	const format = mysql.format(query, [user, clave]);
	const execute = await dbConnection.query(format);

	return execute;
};

module.exports = {
	create,
};
