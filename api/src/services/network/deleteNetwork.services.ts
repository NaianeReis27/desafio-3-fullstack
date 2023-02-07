import AppDataSource from '../../data_source';
import { NetWork } from '../../entities/network.entity';
import { AppError } from '../../errors/AppError';

const deleteNetworkService = async (id: string) => {
    const networkRepository = AppDataSource.getRepository(NetWork);
    const findNetwork = await networkRepository.findOneBy({ id: id });
    if (!findNetwork) {
        throw new AppError('Network not found', 404);
    }
    await networkRepository.delete({ id: id });
};

export default deleteNetworkService;
