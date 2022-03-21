const express = require('express');
const router = express.Router();

// Controlador
const StorageController = require('../../controllers/Storage');
// Middleware
const uploadMiddleware = require('../../utils/HandleStorage');
const { validatorId } = require('../../validators/main');

// Rutas
router.get('/', StorageController.index);

router.get('/:id', validatorId, StorageController.show);

router.delete('/:id', validatorId, StorageController.destroy);

router.post(
	'/single',
	uploadMiddleware.single('myfile'),
	StorageController.store
);
router.post(
	'/array',
	uploadMiddleware.array('myfile'),
	StorageController.store
);

module.exports = router;
