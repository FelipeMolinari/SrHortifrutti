require('dotenv').config()
import './database'

import express,{Express} from 'express'
import routes from './routes'
import cors from 'cors'
import corsConfig from './config/cors'
import bodyParser from 'body-parser';
import morgan from 'morgan'
import path from 'path'
class App {
  server: Express;
  constructor() {
    this.server = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.server.use(cors(corsConfig));
    this.server.use('/files',express.static(path.resolve(__dirname, '..', 'tmp')));
    this.server.use(morgan('dev'));
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;