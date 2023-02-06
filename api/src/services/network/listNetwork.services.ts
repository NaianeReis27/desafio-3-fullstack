import AppDataSource from '../../data_source';
import { NetWork } from '../../entities/network.entity';
import { INetwork } from '../../interfaces/network.interface';

const listNetworksService = async (id: string): Promise<INetwork[]> => {
    const networkRepository = AppDataSource.getRepository(NetWork);
    const networks = networkRepository.find({
        where: {
            user: { id },
        },
        relations: {
            user: true,
        },
    });
    return networks;
};

export default listNetworksService;
