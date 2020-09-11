import express from 'express';
import data from './dataExample'

const routes = express.Router();

routes.get('/products', (_,res)=>{
  res.send(data)
});


export default routes;