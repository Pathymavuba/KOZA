const express = require('express');
const User = require('./models/userModel')


const app  = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




module.exports = app