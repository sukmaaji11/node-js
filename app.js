//Sukma Aji Yudantomo
//Just Learn Never Ending

//1
//function sayHello (name) {
//    console.log('Hello' + name);
//}

//sayHello('Bajuri');
//console.log(window);

//2
//console.log();
//setTimeout()
//clearTimeout();
//setInterval()
//clearInterval()
//var message = '';
//console.log(global.message);

//3
//var sayHello = function() {
//}
//window.sayHello();

//4
//console.log(module);

//5 Load Module
//var logger = require('./logger');
//const logger = require('./logger');
//console.log(logger);
//logger = 1;
//logger.log('message');
//logger('message');

//6
//const path = require('path');
//var pathOb = path.parse(__filename);
//console.log(pathOb);

//7
//const os = require('os');
//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();
//console.log('Total Memory: ' + totalMemory);
//console.log('Free Memory: ' + freeMemory);

//8
const fs = require('fs');
//const file = fs.readdirSync('./');
//console.log(file);
fs.readdir('./', function(err, file) {
    if(err) console.log('Error', err);
    else console.log('Result', file);
});
//Try Error
//fs.readdir('$', function(err, file) {
//    if(err) console.log('Error', err);
//    else console.log('Result', file);
//});













