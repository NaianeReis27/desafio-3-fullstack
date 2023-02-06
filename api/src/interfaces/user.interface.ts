export interface IUserRequest {
    name: string;
    email: string;
    tel: string;
    password: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    tel: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserUpdate {
    name?: string;
    email?: string;
    password?: string;
    tel?: string;
}
