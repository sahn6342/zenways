var request = require('request');
var proc=require('process')
//var tq=proc.argv[2];
var temp="http://api.openweathermap.org/data/2.5/weather?q="+proc.argv[2]+"&appid=869ab7494b72ec0c033843d476e412f1";
var obj="";
request(temp, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  obj=JSON.parse(body); // Print the HTML for the Google homepage.
  console.log(obj.name);
  console.log(obj);
});

