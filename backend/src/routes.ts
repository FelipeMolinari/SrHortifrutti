import express from 'express';
import SectionController from './app/Controllers/SectionController';
import UserController from './app/Controllers/UserController';
import data from './dataExample'

const routes = express.Router();

routes.get('/products', (_,res)=>{
  res.send(data)
});

routes.post('/user', UserController.store)
routes.post('/section', SectionController.store)


export default routes;