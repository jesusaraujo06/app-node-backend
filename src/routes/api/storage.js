const express = require('express');
const router = express.Router();

// Controlador
const StorageController = require('../../controllers/Storage');
// Middleware
const uploadMiddleware = require('../../utils/HandleStorage');
const { validatorId } = require('../../validators/main');
const { authMiddleware } = require('../../middlewares/session');

// Rutas
router.get('/', authMiddleware, StorageController.index);

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
