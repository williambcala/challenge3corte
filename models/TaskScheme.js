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

module.exports = model('Task',TaskScheme);