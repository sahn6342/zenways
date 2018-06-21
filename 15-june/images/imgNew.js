var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file4.jpeg");
var request = http.get("http://en.wikipedia.org/wiki/File:Sariaya_Beach.jpeg", function(response) {
  response.pipe(file);
});
