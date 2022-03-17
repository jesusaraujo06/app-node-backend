const { promisePool, mysql } = require('../../config/database');

const insert = async ({ user, clave }) => {
	const query = 'INSERT INTO usuario (user, clave) VALUES (?, ?)';
	const format = mysql.format(query, [user, clave]);
	const execute = await promisePool.query(format);

	return execute;
};

module.exports = {
	insert,
};
