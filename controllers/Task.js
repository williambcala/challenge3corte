const usuario = require("../models/usuario");

const crearTask = async (req,res = express.request)=>{
    const task = new Task(req.body);

    try{
        task.user = req.uid;
        const saved = await task.save();

        res.json({
            ok:true,
            task:saved
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            task: 'Internal error'
        })
    }
}

const listarTasks = async (req,res = express.request)=>{
    const usuarios = await usuario.find()
    .populate('tareas','title');

    try{
        res.status(200).json({
            ok:true,
            usuarios
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            task: 'Internal error'
        })
    }
}