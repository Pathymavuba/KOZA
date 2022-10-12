const express = require('express');
const cors = require('cors')
const userRoutes = require('./routers/userRouter')
const passport = require('passport')


const app  = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
   require('./config/passport')
   
app.use('/koza/auth',userRoutes)


module.exports = app