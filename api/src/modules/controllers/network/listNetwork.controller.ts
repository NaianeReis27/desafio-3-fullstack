import { Request, Response } from 'express';
import listNetworksService from '../../services/network/listNetwork.services';

const listNetworksController = async (req: Request, res: Response) => {
    const id: string = req.user.id;
    const networks = await listNetworksService(id);
    return res.status(200).json(networks);
};

export default listNetworksController;
