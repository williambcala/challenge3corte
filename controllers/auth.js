const express = require('expres');
const Usuario= require('express-validator');
const bcrypt = require('bcryptjs');
const{generarJWT} = require('../helpers/jwt');


const crearUsuario = async (req,res = express.request)=>{
   const {email,password} = req.body

    try{
        let usuario = await Usuario.findOne({email:email})
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg: 'El usuario no existe',
            })
        }

        const passwordValid = bcrypt.compareSync(password,usuario.password);
        if(!passwordValid){
            return res.status(400).json({
                ok:false,
                msg: 'El password no es valido',
            })
        }
      const token = await(generarJWT(usuario.id.usuario.name))

        res.status(200).json({
            ok:true,
            usuario,
            token
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            error
        })
    }

}
    



const loginUsuario = (req,res = express.request)=>{

res.json({
    ok:true
    })
}


const revalidarToken = async(req,res = express.request)=>{
    const {uid,name} = req

    const token = await(generarJWT(uid,name))
    res.json({
        ok:true,
        token
        
    })
}
module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}