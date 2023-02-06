import { Router } from 'express';
import authMiddleware from '../../../modules/middlewares/auth.middleware';

import createUserController from '../../../modules/controllers/user/createUser.controller';
import updateUserController from '../../../modules/controllers/user/updateUser.controller';
import deleteUserController from '../../../modules/controllers/user/deleteUser.controller';
import listUsersController from '../../../modules/controllers/user/listUser.controller';
import emailAlreadyExistMiddleware from '../../../modules/middlewares/emailAlreadyExist.middleware';
const usersRoutes = Router();

usersRoutes.post('', emailAlreadyExistMiddleware, createUserController);
usersRoutes.patch('/:id', authMiddleware, updateUserController);
usersRoutes.delete('/:id', authMiddleware, deleteUserController);
usersRoutes.get('', authMiddleware, listUsersController);

export default usersRoutes;
