var dbPerson=require('../models/person');
exports.editPerson=(req,res)=>{
    if(!req.body.id||!req.body.name||!req.body.age||!req.body.phone){
        res.json({
            success:false,
            msg:"plz enter all details jj"
        })        
    }
    else{
        dbPerson.findOne({_id:req.body.id},(err,data)=>{
            if(err){
                req.json({
                    error:err,
                    msg:"wrong"
                })
            }
            else if(!data){
                res.json({
                    success:false,
                    err:"user not found"
                })
            }
        //    else{
        //        res.json({
        //            data :req.body.name
        //        })
        //    }
            else{
                dbPerson.findOneAndUpdate({_id:req.body.id},{$set:{
                   name:req.body.name,age:req.body.age,phoneNo:req.body.phone
                }},(err,data)=>{
                    if(err){
                            res.json({
                                success:false,
                                msg:"issue in updating",
                                error:err
                            })
                    }
                    else{
                        res.json({
                            success:true
                        })
                    }
                })
            }
        })
    }
}