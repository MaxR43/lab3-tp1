const mongoose = require('mongoose');
const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://maxireyesgordillo:tL16CY6NKPG4bQOV@bd1.q6gzn8u.mongodb.net/producto_prueba", {});
        mongoose.set('strictQuery', false);
        console.log('Mongo connected');
    } catch (err) {
        console.error(err);
        process.exit(1); // 1 indica que hubo un error al salir del proceso
    }
}
module.exports = dbconnect;




