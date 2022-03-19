const express = require('express');
const router = express.Router();

// Controlador
const UserController = require('../../controllers/User');

// Middleware
const {
	validatorStore,
	validatorShow,
} = require('../../validators/user');

// const customHeader = require('../../middlewares/customHeader');

// Rutas
router.get('/', UserController.index);
router.get('/:id', validatorShow, UserController.show);
router.post(
	'/create',
	validatorStore,
	UserController.store
);
router.put(
	'/:id',
	validatorShow,
	validatorStore,
	UserController.update
);
router.delete(
	'/:id',
	validatorShow,
	UserController.destroy
);

module.exports = router;
