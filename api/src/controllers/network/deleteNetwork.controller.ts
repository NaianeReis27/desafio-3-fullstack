import { Request, Response } from 'express';
import deleteNetworkService from '../../services/network/deleteNetwork.services';

const deleteNetWorkController = async (req: Request, res: Response) => {
    await deleteNetworkService(req.params.id);
    return res.status(204).send();
};

export default deleteNetWorkController;
