const express = require('express');
const router = express.Router();

// Controlador
const StorageController = require('../../controllers/Storage');
// Middleware
const uploadMiddleware = require('../../utils/HandleStorage');

// Rutas
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
