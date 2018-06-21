var imageSearch = require('node-google-image-search');

var results = imageSearch('cat', callback, 0, 5);

function callback(results) {
    //_do something with results_;
console.log(results);
}
