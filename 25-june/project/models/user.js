var mong=require('mongoose')
var schema=mong.Schema
var user=new schema({
    name:{
        type:String,
        required:true
    },
    password:String,
    email:{
        type:String,
        required:true,
        unique:true
    }

})
module.exports=mong.model('user',user)