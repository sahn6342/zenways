var mong=require('mongoose')
var schema=mong.Schema
var tsk=new schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Incomplete"
    }
})
module.exports=mong.model('task',tsk);