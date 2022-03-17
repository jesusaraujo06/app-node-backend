import { Router } from 'express';
const routerUser = Router();

// Controlador
import {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} from '../controllers/users';

// Rutas
routerUser.get('/', getItems);
routerUser.get('/:id', getItem);
routerUser.post('/create', createItem);
routerUser.patch('/:id', updateItem);
routerUser.delete('/id', deleteItem);

export default routerUser;
