import { Request, Response } from 'express';
import { IUserLogin } from '../../interfaces/user.interface';
import createLoginService from '../../services/login/cretateLogin.services';

const createLoginController = async (req: Request, res: Response) => {
    const data: IUserLogin = req.body;
    const token = await createLoginService(data);
    return res.status(200).json({ token });
};

export default createLoginController;
