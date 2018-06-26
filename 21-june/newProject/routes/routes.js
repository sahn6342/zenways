var express=require('express');
var router=express.Router();
var newTask=require('./task');
// var ChangeState=require('./changeStatus');
router.post('/addTask',newTask.addTask);
router.get('/getTask',newTask.getTask);
router.post('/changeState',newTask.changeState);
module.exports=router;