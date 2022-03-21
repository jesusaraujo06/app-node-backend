const express = require('express');
const router = express.Router();

// Controlador
const UserController = require('../../controllers/User');

// Middleware
const { validatorStore } = require('../../validators/user');
const { validatorId } = require('../../validators/main');

// const customHeader = require('../../middlewares/customHeader');

// Rutas
router.get('/', UserController.index);

router.get('/:id', validatorId, UserController.show);

router.post('/create', validatorStore, UserController.store);

router.put('/:id', validatorId, validatorStore, UserController.update);

router.delete('/:id', validatorId, UserController.destroy);

module.exports = router;
