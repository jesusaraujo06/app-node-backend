const express = require('express');
const router = express.Router();

// Controlador
const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require('../controllers/users');

// Rutas
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/create', createItem);
router.patch('/:id', updateItem);
router.delete('/id', deleteItem);

module.exports = router;
