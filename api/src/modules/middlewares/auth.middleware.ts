import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: 'Missing authorization headers',
        });
    }

    token = token.split(' ')[1];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt.verify(
        token,
        process.env.SECRET_KEY as string,
        (error: any, decoded: any) => {
            if (error) {
                return res.status(401).json({
                    message: 'Missing authorization headers',
                });
            }

            req.user = {
                id: decoded.sub,
            };
        },
    );

    return next();
};

export default authMiddleware;
