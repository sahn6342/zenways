var express=require('express');
var router=express.Router()
/* var dbPerson=require('../models/person')
router.post("/addperson",(req,res)=>{
if(!req.body.name||!req.body.age||!req.body.phoneNo){
    res.json({
        success:false,
        msg:"plz enter full details"
    })
}
else{
    new dbPerson({
        name:req.body.name,
        age:req.body.age,
        address:{
            line1:req.body.line1,
            line2:req.body.line2,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode,
            country:req.body.country
        },
        phoneNo:req.body.phoneNo
    }).save((err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"try after some time"
            })
        }
        else{
            res.json({
                success:true,
                msg:"done"
            })
        }
    })
}
})*/
var newPerson=require('./addperson');
var newPerson1=require('./editPerson');
router.post('/addperson',newPerson.addPerson)
router.get('/getperson',newPerson.getPerson)
router.post('/editperson',newPerson1.editPerson)
module.exports=router