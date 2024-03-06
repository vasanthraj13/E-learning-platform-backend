const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())

const multer = require('multer');

export const upload = multer({dest : "uploads/"})



const userRoute = require('./routes/userRoute')
const loginroute = require('./routes/adminRoute')
//use route
app.use('/api/users',userRoute)
app.use('/api/admin',loginroute)


app.listen(PORT,()=>{
  console.log(`Server started at ${PORT}` );
})