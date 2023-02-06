import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PGPORT),
    username: process.env.POSTGRES_USER,
    password: process.env.SECRET_KEY,
    database: process.env.DB,
    migrations: ['./src/shared/typeorm/migrations/*.ts'],
    entities: ['./src/modules/entities/*.ts'],
});

export default AppDataSource;
