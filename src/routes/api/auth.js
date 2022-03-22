const express = require('express');
const router = express.Router();

// Controlador
const AuthController = require('../../controllers/Auth');

// Controlador
const { validatorLogin, validatorRegister } = require('../../validators/auth');
// Middleware

// const customHeader = require('../../middlewares/customHeader');

// Rutas
router.post('/login', validatorLogin, AuthController.login);

router.post('/register', validatorRegister, AuthController.register);

module.exports = router;
