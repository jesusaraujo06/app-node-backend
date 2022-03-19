const express = require('express');
const router = express.Router();

// Controlador
const UserController = require('../../controllers/User');

// Middleware
const { validatorStore } = require('../../validators/user');
const customHeader = require('../../middlewares/customHeader');

// Rutas
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post(
	'/create',
	validatorStore,

	UserController.store
);
router.patch('/:id', UserController.update);
router.delete('/id', UserController.destroy);

module.exports = router;
