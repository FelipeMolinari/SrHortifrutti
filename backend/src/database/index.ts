import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:true
})
.then(()=>console.log("MongoDB connected"))
.catch(error=>{
  console.log(process.env.MONGODB_URL)
  console.error(error)}
  )
