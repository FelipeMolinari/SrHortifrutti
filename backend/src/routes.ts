import express from 'express';

import ProductController from './app/Controllers/ProductController';
import PublicProductsController from './app/Controllers/PublicProductsController';
import ProductTypesController from './app/Controllers/ProductTypesController';
import SectionController from './app/Controllers/SectionController';
import UserController from './app/Controllers/UserController';
import isAuth from './middlewares/isAuth'

import {uploadAvatar,uploadGallery} from './config/multer'
import GalleryController from './app/Controllers/GalleryController';
import AvatarController from './app/Controllers/AvatarController';
import ReviewController from './app/Controllers/ReviewController';

const routes = express.Router();

routes.get('/products', PublicProductsController.index);
routes.get('/providers', UserController.index);

routes.post('/provider', UserController.store)
routes.get(`/user/:user_id`, UserController.show)

routes.post('/section', SectionController.store)
routes.get('/gallery/:user_id', GalleryController.index)

routes.get('/review/:user_id', ReviewController.index)
routes.post('/review', ReviewController.store)


// Secutes routes
routes.use(isAuth)

routes.post('/secure/files/avatar', uploadAvatar.single("file"), AvatarController.store );
routes.put('/secure/update', UserController.update)
routes.post('/secure/product/add', ProductController.store)

routes.delete('/secure/product/delete/:id', ProductController.delete)
routes.put('/secure/product/update/:id', ProductController.update)

routes.get('/secure/avaiables', ProductTypesController.index)

routes.get('/secure/products', ProductController.index)
routes.post('/files/gallery', uploadGallery.single("file"),GalleryController.store)
routes.delete('/files/gallery/:id', GalleryController.delete)

export default routes;

