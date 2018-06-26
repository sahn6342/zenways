var dbTask=require('../models/tasks')
exports.addTask=(req,res)=>{
    if(!req.body.name){
        res.json({
            success:false,
            msg:"plz enter full details"
        })
    }
    else{
        new dbTask({
            name:req.body.name
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
    exports.getTask=(req,res)=>{
        dbTask.find({},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:err
                })
            }
            else{
                res.json({
                    success:true,
                    sjs:"all tasks",
                    data:data
                })
            }
        })
    }
    
exports.changeState=(req,res)=>{
    if(!req.body.name){
        res.json({
            success:false,
            msg:"plz provide name of task"
        })        
    }
   else{
                dbTask.findOneAndUpdate({name:req.body.name},{$set:{
                   status:"Completed"
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
        // })
    }
// }