var scraper = require('google-search-scraper');
var DeathByCaptcha = require('deathbycaptcha');
 
var dbc = new DeathByCaptcha('username', 'password');
 
var options = {
  query: 'site:edu "information theory"',
  age: 'y', // less than a year,
  solver: dbc
};
 
scraper.search(options, function(err, url) {
  // This is called for each result
  if(err) throw err;
  console.log(url)
});
