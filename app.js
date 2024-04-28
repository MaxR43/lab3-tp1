const express = require('express');
const dbconnect = require('./config');

const app = express(); 



app.listen(3000, () => {

    console.log("El servidor esta en el puerto 3000")
})

dbconnect();
 