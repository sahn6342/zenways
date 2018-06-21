const temp=require("fs");
try{
temp.unlinkSync('sahn.txt');
console.log("done");
}
catch(err){
console.log(err);
}
