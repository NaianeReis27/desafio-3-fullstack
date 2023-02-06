import { Request, Response } from 'express';
import { INetworkRequest } from '../../interfaces/network.interface';
import createNetworkServices from '../../services/network/createNetwork.services';

const createNetworkController = async (req: Request, res: Response) => {
    const id: string = req.user.id;
    const network: INetworkRequest = req.body;
    const createdNetwork = await createNetworkServices(id, network);
    return res.status(201).json(createdNetwork);
};

export default createNetworkController;
