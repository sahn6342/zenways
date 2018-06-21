var temp=require("./b");
var a=parseInt(process.argv[2]);
var b=parseInt(process.argv[3]);
console.log(temp.sum(a,b),temp.sub(a,b),temp.mul(a,b),temp.div(a,b));
