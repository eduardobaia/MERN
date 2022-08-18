require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes= require('./routes/workouts')
const userRoutes= require('./routes/user')
// express app
const app = express()

// middleware : for log the requests
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

//conect to db 
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
//listen for requests
  app.listen(process.env.PORT, () => {
    console.log('conected to db && listening on port', process.env.PORT)
  })
}).catch((e) => {
  console.log(e)
})

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


// app.listen(4000, () => {
//   console.log('listening on port !!', 4000)
// })