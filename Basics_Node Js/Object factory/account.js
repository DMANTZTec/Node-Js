// var acc = require('./global')
// var AccCount = function(){
//     acc.stdNo =  100;
//     console.log("Accounts:" + acc.stdNo);
// }
// module.exports.stdAcc = AccCount 

var acc = require('./global')

var stdAcc = acc.stdNo;
var AccCount = function(){
    stdAcc =  100;
    console.log("Accounts:" + stdAcc);
}
module.exports.stdAcc = AccCount 