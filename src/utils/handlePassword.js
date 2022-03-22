const bcryptjs = require('bcryptjs');

/**
 * Encriptar contraseña
 * @param {*} passwordPlain string
 */
const encrypt = async passwordPlain => {
	return await bcryptjs.hash(passwordPlain, 10);
};

/**
 * Comparar contraseña sin encriptar y contraseña encriptada
 * @param {*} passwordPlain string
 * @param {*} hashPassword  string
 */
const compare = async (passwordPlain, hashPassword) => {
	return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = {
	encrypt,
	compare,
};
