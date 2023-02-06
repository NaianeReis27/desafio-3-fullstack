import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import listNetworksController from '../controllers/network/listNetwork.controller';
import createNetworkController from '../controllers/network/createNetwork.controller';
import deleteNetWorkController from '../controllers/network/deleteNetwork.controller';
import updateNetworkController from '../controllers/network/updateNetwork.controller';
const networkRoutes = Router();

networkRoutes.post('', authMiddleware, createNetworkController);
networkRoutes.delete('/:id', authMiddleware, deleteNetWorkController);
networkRoutes.patch('/:id', authMiddleware, updateNetworkController);
networkRoutes.get('', authMiddleware, listNetworksController);

export default networkRoutes;
