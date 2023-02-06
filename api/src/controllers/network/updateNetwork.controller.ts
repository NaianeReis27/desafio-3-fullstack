import { Request, Response } from 'express';
import { INetworkRequest } from '../../interfaces/network.interface';
import updateNetworkService from '../../services/network/updateNetwork.services';

const updateNetworkController = async (req: Request, res: Response) => {
    const network: INetworkRequest = req.body;
    const id: string = req.params.id;
    const updatedNetwork = await updateNetworkService(id, network);
    return res.status(201).json(updatedNetwork);
};

export default updateNetworkController;
