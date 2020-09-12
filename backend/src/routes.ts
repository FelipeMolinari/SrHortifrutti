import express, {Response} from 'express';
import SectionController from './app/Controllers/SectionController';
import UserController from './app/Controllers/UserController';
import data from './dataExample'
import isAuth from './middlewares/isAuth'
const routes = express.Router();

routes.get('/products', (_,res)=>{
  res.send(data)
});

routes.post('/user', UserController.store)
routes.post('/section', SectionController.store)

// Secutes routes
routes.use(isAuth)
routes.get('/secure', (_, res:Response)=>{
   res.send({msg: "Secure route"})
})
export default routes;