// var adm = require('./global')
// var admCount = function(){
//      adm.stdNo = 200;
//     console.log("Adminstration:" + adm.stdNo)
// }
// module.exports.stdAdm = admCount;

var adm = require('./global')

var stdAdm = adm.stdNo;
var admCount = function(){
    stdAdm = 200;
    console.log("Adminstration:" + stdAdm)
}
module.exports.stdAdm = admCount;