const express = require('express')
require('dotenv').config()
const {dbConnection} = require('../database/config')
const cors = require('cors')

class Server {
    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:'/api/auth',
            task: 'api/task'
        }

        this.connectToDB();
        this.addMiddlewares();
        this.setRoutes();
    }

    //base de datos

    async connectToDB(){
        await dbConnection();

    }

    addMiddlewares(){
        //cors
        this.app.use(cors())

        //leer y parseo del body 
        this.app.use(express.json());

        //ppublicar folder 
        this.app.use(express.static('public'))


    }

    setRoutes(){
        //configuracion de rutas 

        this.app.use(this.paths.auth,require('../routes/auth'))
        this.app.use(this.paths.task,require('../routes/task'))

    }

    sockets(){
        this.io.on('connection',socket =>{
            console.log('cleinte conectado', socket.id);
            socket.on('disconnect',()=>{{
                console.log('Cliente Desconectado');
            }})
        })
    }
    listen(){

        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',process.env.PORT)
        })
    }
}

module.exports = Server;