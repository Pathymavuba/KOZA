const mongoose = require('mongoose')

require('dotenv').config()

const db_connection = process.env.DB_CONNECTION

mongoose.connect(db_connection)
.then(()=>{
    console.log("la connexion avec la base de données a reussi ");
})
.catch(err=>console.log(err))

module.exports = mongoose