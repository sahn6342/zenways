const temp=require('http');
const port= 3000
const requestHandler=(request,response)=>{
console.log(request.url);
response.end("hello server");
}
const server=temp.createServer(requestHandler);
server.listen(port,(err)=>{
if(err){
console.log("error error error");
}
console.log(`server is listening on ${port}`)
});
