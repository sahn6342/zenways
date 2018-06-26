var dbUser=require('../models/user');




//in token verify

var jwt=require('jsonwebtoken')
exports.tokenVerify=(req,res,next)=>{
    if(!req.headers['x-access-token']{
        res.json({
            succcess:false,
            msg:"you are chore"
        })
    })
}
