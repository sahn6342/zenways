var express=require('express');
var app=express();
var config=require('./config/config.json');
// var dbTask=require('./models/tasks');
var mongoose=require('mongoose')
var routes=require('./routes/routes')
//compulsory to use body part
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//------------------------------------------------------------------------------------
mongoose.connect("mongodb://localhost/sahn",(err,data)=>{
    if(err){
        console.log("database not connected")
    }
    else{
        console.log("database connected")
    }
})  
const PORT=process.env.port||config.PORT
app.use('/worker',routes);
/*To start port  */
app.listen(PORT,()=>{
    console.log("server strated at port",PORT);
})
