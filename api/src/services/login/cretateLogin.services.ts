import AppDataSource from '../../data_source';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUserLogin } from '../../interfaces/user.interface';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import 'dotenv/config';

const createLoginService = async (data: IUserLogin): Promise<string> => {
    const { email, password } = data;
    console.log(email, password);
    if (!email || !password) {
        throw new AppError(
            'Only the email and password fields can be send',
            404,
        );
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({
        email: email,
    });

    const verifyFields = Object.keys(data).some(
        e => e !== 'email' && e !== 'password',
    );

    if (verifyFields) {
        throw new AppError(
            'Only the email and password fields can be send',
            400,
        );
    }

    const passwordMatch = await compare(password, user!.password);

    if (!passwordMatch) {
        throw new AppError('Invalid e-mail or password', 403);
    }

    const token = jwt.sign(
        {
            id: user!.id,
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: user!.id,
        },
    );

    return token;
};

export default createLoginService;
