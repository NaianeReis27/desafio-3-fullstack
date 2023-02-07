import AppDataSource from '../../data_source';
import { AppError } from '../../errors/AppError';
import { INetworkUpdate, INetwork } from '../../interfaces/network.interface';
import { NetWork } from '../../entities/network.entity';

const updateNetworkService = async (
    id: string,
    network: INetworkUpdate,
): Promise<INetwork> => {
    const networkRepository = AppDataSource.getRepository(NetWork);
    const findNetwork = await networkRepository.findOneBy({ id: id });
    const { name, tel } = network;
    const verifyFields = Object.keys(network).some(
        ele => ele !== 'name' && ele !== 'tel',
    );

    if (verifyFields) {
        throw new AppError(
            'Only the name, email and password fields can be changed',
            400,
        );
    }

    if (!findNetwork) {
        throw new AppError('Network not found', 404);
    }

    await networkRepository.update(id, {
        name: name ? name : findNetwork.name,
        tel: tel ? tel : findNetwork.tel,
    });

    const updatedNetwork = await networkRepository.findOneBy({
        id,
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return updatedNetwork!;
};

export default updateNetworkService;
