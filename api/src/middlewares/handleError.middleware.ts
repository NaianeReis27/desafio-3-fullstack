import { Request, Response } from 'express';
import { AppError } from '../errors';

const handleErrorMiddleware = async (
    error: Error,
    req: Request,
    res: Response,
) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }

    return res.status(500).json({
        message: 'Internal server error',
    });
};

export default handleErrorMiddleware;
