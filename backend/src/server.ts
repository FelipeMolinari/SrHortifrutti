import express from 'express'
import cors from 'cors'
import data from './dataExample'
const app = express()
app.use(cors)
app.get('/products', (_, res) => {
  return res.send(data)
})
app.listen(3333, ()=>console.log("server started at port:3333"))
