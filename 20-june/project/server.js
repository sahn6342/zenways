var express=require('express');
var app=express();
var config=require('./config/config.json');
var dbPerson=require('./models/person');
var mongoose=require('mongoose')


/*To insert new document */
// var newPerson=new dbPerson({
//     name:"sah",
//     age:"20",
//     phoneNo:830270522,
//     address:{
//         line1:"vpo",
//         line2:"haress"
//     },
//     hobbies:["sleep","slesp"]
// })
// newPerson.save((err,data)=>{
//     if(err){
//         console.log("data not saved");
//     }
//     else{
//         console.log("data saved",data)
//     }
// })

/*
another way


new dbPerson({
    name:"sahn",
    age:"20",
    phoneNo:8930270522,
    address:{
        line1:"vpo",
        line2:"haress"
    },
    hobbies:["sleep","slesp"]
}).save((err,data)=>{
    if(err){
        console.log("data not saved");
    }
    else{
        console.log("data saved")
    }
})
*/

/*------------------------------------------------------------------------- */
/*To connect database */
mongoose.connect("mongodb://localhost/sahn",(err,data)=>{
    if(err){
        console.log("database not connected")
    }
    else{
        console.log("database connected")
    }
})  
/*-------------------------------------------------------------------------- */
// const port=5000;
//to get port from either envirenment variable or from another file like config
const PORT=process.env.port||config.port
/*To start port  */

app.listen(PORT,()=>{
    console.log("server strated at port",PORT);
})
/*--------------------------------------------------------------------------*/
/*To find in database */
dbPerson.find({"phoneNo":8930270522},(err,data)=>{
    if(err){
        console.log(err)
    }
    else if(!data.length){
        console.log("data not found")
    }
    else if(data){
        console.log(data)
    }
})
/*------------------------------------------------------------------------- */