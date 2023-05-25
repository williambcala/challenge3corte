console.log('hello world')


const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')
const cors = require('cors')
//Base de Datos 

dbConnection();

//crear express app 

app.use(cors())
const app = express();

app.use(express.static('public'))

///lectura y parseo del body

app.use(express.json())

//creación de rutas 

//app.get('/',(req,res)=>{
  //  res.json({
    //    ok:true
    //})
//})

//rutas

app.use('/api/auth',require('./routes/auth'))

//Para escuchar en el puerto 4000

app.listen(process.env  .PORT,()=>{
    console.log('Servidor corriendo en puerto ',process.env.PORT)
})

const Server = require('./server/server');
const myServer = new Server();
myServer.listen();
