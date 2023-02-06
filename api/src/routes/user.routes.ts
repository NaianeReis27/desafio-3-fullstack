import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';

import createUserController from '../controllers/user/createUser.controller';
import updateUserController from '../controllers/user/updateUser.controller';
import deleteUserController from '../controllers/user/deleteUser.controller';
import listUsersController from '../controllers/user/listUser.controller';
import emailAlreadyExistMiddleware from '../middlewares/emailAlreadyExist.middleware';
const usersRoutes = Router();

usersRoutes.post('', emailAlreadyExistMiddleware, createUserController);
usersRoutes.patch('/:id', authMiddleware, updateUserController);
usersRoutes.delete('/:id', authMiddleware, deleteUserController);
usersRoutes.get('', authMiddleware, listUsersController);

export default usersRoutes;
