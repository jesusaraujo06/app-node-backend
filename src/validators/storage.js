const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

/**
 * No necesitamos un validador para crear un archivo
 * por que ya multer esta realizando esa función
 */

module.exports = { validatorStore };
