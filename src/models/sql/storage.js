import { promisePool, mysql } from '../../config/database.js';

export const insert = async ({ user, clave }) => {
	// const query = 'INSERT INTO usuario (user, clave) VALUES (?, ?)';
	// const format = mysql.format(query, [user, clave]);
	// const execute = await promisePool.query(format);
	// return execute;
};
