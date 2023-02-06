import { Request, Response } from 'express';
import { IUserRequest } from '../../interfaces/user.interface';
import updateUserService from '../../services/user/updateUser.service';

const updateUserController = async (req: Request, res: Response) => {
    const user: IUserRequest = req.body;
    const id: string = req.params.id;
    const updatedUser = await updateUserService(id, user);
    return res.status(201).json(updatedUser);
};

export default updateUserController;
