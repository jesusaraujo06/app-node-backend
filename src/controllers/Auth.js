const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { UserModel } = require('../models/index');
const { tokenSign } = require('../utils/handleJwt');
const { httpError } = require('../utils/handleError');

/**
 * Loguear un usuario
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
	try {
		req = matchedData(req);
		const user = await UserModel.findOne(req.user);
		if (!user) {
			httpError(res, 'USER_NOT_EXISTS', 404);
			return;
		}

		const dataUser = user[0];
		const hashPassword = dataUser.clave;
		const check = await compare(req.clave, hashPassword);

		if (!check) {
			httpError(res, 'PASSWORD_INVALID', 401);
			return;
		}

		const data = {
			token: await tokenSign(dataUser),
			user: dataUser,
		};

		res.send({ data });
	} catch (err) {
		httpError(res, 'ERROR_LOGIN_USER');
	}
};

/**
 * Registrar un nuevo usuario
 * @param {*} req
 * @param {*} res
 */
const register = async (req, res) => {
	try {
		req = matchedData(req);
		// Sobreescribir el valor de la propiedad password por un nuevo valor
		const passwordHash = await encrypt(req.clave);
		const body = { ...req, clave: passwordHash };
		const dataUser = await UserModel.create(body);
		const data = {
			token: await tokenSign(dataUser),
			user: dataUser,
		};
		res.send({ data });
	} catch (err) {
		httpError(res, 'ERROR_REGISTER_USER');
	}
};

module.exports = { login, register };
