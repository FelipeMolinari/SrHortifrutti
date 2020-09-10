import express from 'express'
import UserController from '@controllers/UserController'
const app = express()

app.get('/', (_, res) => {
  console.log(UserController)
  return res.json({ message: 'Hello world' })
})
app.listen(3333)
