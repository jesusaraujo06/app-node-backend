const express = require('express');
const router = express.Router();

// Controlador
const UserController = require('../controllers/User');

// Rutas
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/create', UserController.store);
router.patch('/:id', UserController.update);
router.delete('/id', UserController.destroy);

module.exports = router;
