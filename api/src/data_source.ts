import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PGPORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB,
    migrations: ['src/migrations/*.ts'],
    entities: ['src/entities/*.ts'],
});

export default AppDataSource;
