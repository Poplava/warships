import { router as userRoutes } from './modules/user';

export default (app) => {
    console.log('Registering modules...');

    app.use('/user', userRoutes);

    console.log('Done!');
}
