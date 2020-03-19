(function (exports, require, module, __filename, __dirname) {
//4.1
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

//function log(message) {
    //Send an HTTP request
 //   console.log(message);
//}

//module.exports.log = log;

//4.2
function log(message) {
    //Send an HTTP request
    console.log(message);
}

module.exports = log;
})