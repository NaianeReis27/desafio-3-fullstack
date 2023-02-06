import { Router } from 'express';
import createSessionController from '../../../modules/controllers/login/cretateLogin.controller';

const loginRoutes = Router();

loginRoutes.post('', createSessionController);

export default loginRoutes;
