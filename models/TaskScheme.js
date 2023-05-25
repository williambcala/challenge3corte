const {Schema,model} = require('mongoose')

const TaskScheme = Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

TaskScheme.method('toJSON', function(){

    const{__v,_id,...Object} = this.toObject();
    Object._id = id;
    return Object;

})

app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTaskData = req.body; 
  
    Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true }, (err, updatedTask) => {
      if (err) {
      
        console.error(err);
        res.status(500).json({ error: 'internal error' });
      } else if (!updatedTask) {
        
        res.status(404).json({ error: 'internal error' });
      } else {
        
        res.json(updatedTask);
      }
    });
  });
  
  
  app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
  
    Task.findByIdAndDelete(taskId, (err, deletedTask) => {
      if (err) {
        
        console.error(err);
        res.status(500).json({ error: '' });
      } else if (!deletedTask) {
       
        res.status(404).json({ error: '' });
      } else {
        
        res.json({ message: '' });
      }
    });
  });
  
  
  const mongoose = require('mongoose');
  
  taskSchema = new mongoose.Schema({
  
    title: String,
    description: String,
  
  });
  
Task = mongoose.model('Task', taskSchema);
  
  module.exports = Task;
  
 Task = require('./controllers/Task');
  
  
  Task.findById(taskId, (err, task) => {
    if (err) {
  
      console.error(err);
    } else if (!task) {
   
      console.log('error',err);
    } else {
    
      console.log(task);
    }
  });


Task = require('./controllers/Task');


Task.findById(taskId, (err, task) => {
  if (err) {
    console.error(err);
  } else if (!task) {
    console.log('Tarea no disponible');
  } else if (task.userId !== userId) {
    
    console.log('usuario no autorizado');
  } else {
    
    console.log(task);
  }
});

const Task = require('./models/task');


put('/tasks/:id', (req, res) => {
const taskId = req.params.id;
const updatedTaskData = req.body;

Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true }, (err, updatedTask) => {
    if (err) {
        console.error(err);
       
status(500).json({ error: '' });
    } else if (!updatedTask) {
      res.status(404).json({ error: '' });
    }else {res.json(updatedTask);
    }
  });
});

module.exports = model('Task',TaskScheme);