var mong=require('mongoose')
var schema=mong.Schema
var person=new schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    /*or
    age:{
        type:Number
    }*/
    phoneNo:{
        type:Number,
        unique:true,
        minlength:10
    },
    address:{
        line1:String,
        line2:String,
        city:String,
        state:String,
        pincode:Number,
        country:String
    },
    //making array
    hobbies:[String]

})
module.exports=mong.model('people',person)