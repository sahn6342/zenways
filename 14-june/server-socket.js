var netq=require('net');

var serve=netq.createServer(function(sock){
sock.write('echo server\r\n');
sock.pipe(sock);
});
serve.listen(1337,'127.0.0.1');
