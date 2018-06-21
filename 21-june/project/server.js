var express=require('express');
var app=express();
var config=require('./config/config.json');
var dbPerson=require('./models/person');
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
//to get port from either envirenment variable or from another file like config
const PORT=process.env.port||config.port
/*
//to use api with get
app.get('/abc',(req,res)=>{
    console.log("here");
    res.json({
        success:true
        })
    })
*/
//to use api with post
// app.post('/abc',(req,res)=>{
// console.log("here");
// res.json({
// 	success:true,
//     headers:req.headers,
//     body:req.body
// 	})
// })
//------------------------------------------------------------------------------------
app.use('/user',routes);
/*To start port  */
app.listen(PORT,()=>{
    console.log("server strated at port",PORT);
})
