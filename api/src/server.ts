import 'reflect-metadata';
import AppDataSource from './data_source';
import app from './app';

(async () => {
    await AppDataSource.initialize()
        .then(() => {
            console.log('Database connected');
        })
        .catch(error => {
            console.log(error);
        });

    app.listen(3333, () => {
        console.log('Server running in port 3333');
    });
})();
