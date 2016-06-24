var Rx = require('rx');
var $ = require("jQuery");

console.log('Ragnarok');
console.log(typeof Rx);

var fs = require("fs");

var data = fs.readFileSync('package.json');

console.log(data.toString());
console.log("Program Ended");
