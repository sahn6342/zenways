const fs=require("fs");
var data ="";
var reader=fs.createReadStream('./sahn.txt');
console.log(reader);
reader.setEncoding('UTF8');
// console.log('------------',reader);
reader.on('data',function(chunk){
data +=chunk;
console.log(chunk)
// console.log("___________",chunk.length,"----",data.length);
});
reader.on('end',function(){
//console.log(data);
});
reader.on('error',function(err){
console.log(err.stack);
});
                                                      
