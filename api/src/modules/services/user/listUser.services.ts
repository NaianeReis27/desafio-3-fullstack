import AppDataSource from '../../../shared/typeorm/data_source';
import { User } from '../../entities/user.entity';
import { IUser } from '../../interfaces/user.interface';

const listUsersService = async (): Promise<IUser[]> => {
    const userRepository = AppDataSource.getRepository(User);
    const users = userRepository.find();
    return users;
};

export default listUsersService;
