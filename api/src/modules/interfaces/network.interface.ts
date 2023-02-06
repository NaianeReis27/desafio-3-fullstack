import { IUser } from './user.interface';

export interface INetworkRequest {
    name: string;
    tel: string;
}

export interface INetwork {
    id: string;
    name: string;
    tel: string;
    user: IUser;
    createdAt: Date;
}

export interface INetworkUpdate {
    name?: string;
    tel?: string;
}
