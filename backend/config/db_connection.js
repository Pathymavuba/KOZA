const mongoose = require('mongoose')

const db_connection = 'mongodb+srv://pathy:LaethiciaKandolo@cluster0.pfgm2xt.mongodb.net/koza?retryWrites=true&w=majority'

mongoose.connect(db_connection)
.then(()=>{
    console.log("la connexion avec la base de données a reussi ");
})
.catch(err=>console.log(err))

module.exports = mongoose