import AppDataSource from '../../data_source';
import { User } from '../../entities/user.entity';
import { IUser, IUserRequest } from '../../interfaces/user.interface';
import { AppError } from '../../errors/AppError';
import { hash } from 'bcryptjs';

const createUserService = async (user: IUserRequest): Promise<IUser> => {
    const { name, email, password, tel } = user;
    if (!password || !name || !tel || !email) {
        throw new AppError(
            'Password, name, email, tel is a required field',
            400,
        );
    }

    const userRepository = AppDataSource.getRepository(User);
    const newUser: IUser = userRepository.create({
        name,
        email,
        tel,
        password: await hash(password, 11),
    });

    await userRepository.save(newUser);

    return newUser;
};

export default createUserService;
