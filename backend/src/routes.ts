import express from 'express';
import ProductController from './app/Controllers/ProductController';
import PublicProductsController from './app/Controllers/PublicProductsController';
import ProductTypesController from './app/Controllers/ProductTypesController';
import SectionController from './app/Controllers/SectionController';
import UserController from './app/Controllers/UserController';
import isAuth from './middlewares/isAuth'
const routes = express.Router();

routes.get('/products', PublicProductsController.index);

routes.post('/user', UserController.store)
routes.post('/section', SectionController.store)

// Secutes routes
routes.use(isAuth)
routes.post('/secure/product/add', ProductController.store)

routes.get('/secure/avaiables', ProductTypesController.index)

routes.get('/secure/products', ProductController.index)

export default routes;
