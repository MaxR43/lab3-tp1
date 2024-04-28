const mongoose = require('mongoose');
const dbconnect = "mongodb://localhost:27017/PrimerDB"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(dbconnect) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;



