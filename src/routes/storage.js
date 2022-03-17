import { Router } from 'express';
import uploadMiddleware from '../utils/handleStorage.js';
import createItem from '../controllers/storage.js';

const routerStorage = Router();

routerStorage.post('/', uploadMiddleware.single('myfile'), createItem);

routerStorage.post('/multi', uploadMiddleware.array('myfile'), (req, res) => {
	res.send({ a: 1 });
});

export default routerStorage;
