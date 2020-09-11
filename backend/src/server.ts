import express from 'express'
import routes from './routes'
import cors from 'cors'
const app = express();
app.use(express.json())
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: false,
};
app.use(cors(options));
app.use(routes)
app.listen(3333, ()=>console.log("server started at port:3333"))
