import AppDataSource from '../../data_source';
import { NetWork } from '../../entities/network.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import { INetwork, INetworkRequest } from '../../interfaces/network.interface';

const createNetworkService = async (
    id: string,
    data: INetworkRequest,
): Promise<INetwork> => {
    const { name, tel } = data;
    const userRepository = AppDataSource.getRepository(User);
    const networkRepository = AppDataSource.getRepository(NetWork);
    const user = await userRepository.findOneBy({ id: id });
    const verifyFields = Object.keys(data).some(
        e => e !== 'name' && e !== 'tel',
    );

    if (verifyFields) {
        throw new AppError('Only the name and tel fields can be send', 400);
    }

    if (!user) {
        throw new AppError('User not found', 404);
    }

    const newNetwork = networkRepository.create({
        name,
        tel,
        user: user,
    });

    const network = await networkRepository.save(newNetwork);

    return network;
};

export default createNetworkService;
