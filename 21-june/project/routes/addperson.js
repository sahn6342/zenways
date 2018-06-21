var dbPerson=require('../models/person')
exports.addPerson=(req,res)=>{
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
    }
exports.getPerson=(req,res)=>{
    dbPerson.find({},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:err
            })
        }
        else{
            res.json({
                success:true,
                sahn:"all person",
                data:data
            })
        }
    })
}