const fs=require('fs');
var temp="";
for(i=0;i<1000000;i++){
temp=temp+' '+parseInt(Math.random()*100000);
}
fs.appendFile("mas.txt",temp,(err)=>{
if(err) throw err;
console.log("done");
});
