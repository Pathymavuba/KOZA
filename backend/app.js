const express = require('express');
const cors = require('cors')
const userRoutes = require('./routers/userRouter')
const messageRoutes = require('./routers/messageRouter')
const conversationRoutes = require('./routers/conversationRouter')
const passport = require('passport')



const app  = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
   require('./config/passport')
   
app.use('/koza/',userRoutes)
app.use('/koza/',messageRoutes)
app.use('/koza',conversationRoutes)


module.exports = app