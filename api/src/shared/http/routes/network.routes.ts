import { Router } from 'express';
import authMiddleware from '../../../modules/middlewares/auth.middleware';
import listNetworksController from '../../../modules/controllers/network/listNetwork.controller';
import createNetworkController from '../../../modules/controllers/network/createNetwork.controller';
import deleteNetWorkController from '../../../modules/controllers/network/deleteNetwork.controller';
import updateNetworkController from '../../../modules/controllers/network/updateNetwork.controller';
const networkRoutes = Router();

networkRoutes.post('', authMiddleware, createNetworkController);
networkRoutes.delete('/:id', deleteNetWorkController);
networkRoutes.patch('/:id', authMiddleware, updateNetworkController);

networkRoutes.get('', authMiddleware, listNetworksController);

export default networkRoutes;
