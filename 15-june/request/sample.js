var request = require('request');
var proc=require('process')
//var tq=proc.argv[2];
//var temp="http://api.openweathermap.org/data/2.5/weather?q="+proc.argv[2]+"&appid=869ab7494b72ec0c033843d476e412f1";
var temp="https://www.google.com/search?q=cat&client=ubuntu&hs=haQ&channel=fs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjxwNvuh9XbAhXLq48KHRt6AwQQ_AUICigB&biw=1366&bih=679"
var obj="";
request(temp, function (error, response, body) {
  //console.log('error:', error); 
  //console.log('statusCode:', response && response.statusCode); 
  //obj=JSON.parse(body); // Print the HTML for the Google homepage.
  //console.log(obj.name);
 console.log(body);
});

