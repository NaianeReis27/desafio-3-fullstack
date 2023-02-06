import AppDataSource from '../../../shared/typeorm/data_source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../../shared/errors';

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({ id });
    if (!findUser) {
        throw new AppError('User not found', 404);
    }
    await userRepository.delete({ id: id });
};

export default deleteUserService;
