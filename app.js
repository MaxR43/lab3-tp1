const express = require('express');
const {request} = require('express')
const app = express();
const dbconnect = require('./config.js');
const ModelUser = require('./userModel');

const router = express.Router();
router.post("/", async (req,res) =>{   //INSERTAR NUEVO USUARIO

const body = req.body;
const respuesta = await ModelUser.create(req.body)
res.json(respuesta);

})
router.get("/", async (req,res) => { //OBTENER TODOS LOS USUARIOS

    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})
app.use(express.json())
app.use(router)
app.listen(3001, () => {
console.log("Hola");
} )

dbconnect();