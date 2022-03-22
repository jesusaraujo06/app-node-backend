const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorLogin = [
	check('user').exists().notEmpty().isLength({ min: 2, max: 20 }),

	check('clave').exists().notEmpty().isLength({ min: 2, max: 20 }),

	(req, res, next) => {
		return validateResults(req, res, next);
	},
];

const validatorRegister = [
	check('user').exists().notEmpty().isLength({ min: 2, max: 20 }),

	check('clave').exists().notEmpty().isLength({ min: 2, max: 20 }),

	(req, res, next) => {
		return validateResults(req, res, next);
	},
];

module.exports = { validatorRegister, validatorLogin };
