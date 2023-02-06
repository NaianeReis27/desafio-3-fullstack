import 'reflect-metadata';
import AppDataSource from './data_source';
import app from './app';

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch(err => {
        console.error('Error during Data Source initialization', err);
    });

app.listen(3333, () => console.log('server is running'));
