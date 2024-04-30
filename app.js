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

router.get("/:id", async (req,res) => { //OBTENER UN UNICO USUARIO CON ID
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id);
    res.send(respuesta);
})

router.put("/:id", async (req,res) => { //ACTUALIZAR UN USUARIO CON ID
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id:id}, body);
    res.send(respuesta);
})

router.delete("/:id", async (req,res) => { //OBTENER UN UNICO USUARIO CON ID
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id});
    res.send(respuesta);
})


app.use(express.json())
app.use(router)
app.listen(3001, () => {
console.log("Conectado al puerto 3001");


} )

dbconnect();