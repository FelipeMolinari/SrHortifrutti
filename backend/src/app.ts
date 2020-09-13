require('dotenv').config()
import './database'

import express,{Express} from 'express'
import routes from './routes'
import cors from 'cors'
import corsConfig from './config/cors'
import bodyParser from 'body-parser';

class App {
  server: Express;
  constructor() {
    this.server = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.server.use(cors(corsConfig));
    this.server.use(express.static('public'));

    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;