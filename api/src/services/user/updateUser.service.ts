import { hash } from 'bcryptjs';
import AppDataSource from '../../data_source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import { IUser, IUserUpdate } from '../../interfaces/user.interface';

const updateUserService = async (
    id: string,
    user: IUserUpdate,
): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({ id: id });
    const { name, email, tel, password } = user;
    const verifyFields = Object.keys(user).some(
        ele =>
            ele !== 'name' &&
            ele !== 'email' &&
            ele !== 'password' &&
            ele !== 'tel',
    );

    if (verifyFields) {
        throw new AppError('User not found', 404);
    }

    if (!findUser) {
        throw new AppError('User not found', 404);
    }

    await userRepository.update(id, {
        name: name ? name : findUser.name,
        email: email ? email : findUser.email,
        password: password ? await hash(password, 10) : findUser.password,
        tel: tel ? tel : findUser.tel,
    });

    const updatedUser = await userRepository.findOneBy({
        id,
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return updatedUser!;
};

export default updateUserService;
