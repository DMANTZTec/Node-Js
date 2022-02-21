var totStd = require('./share')
var myStudents = function(){
    totStd.Students = 400;
    console.log("Students in Admin Module:" + totStd.Students)
}
module.exports.myStudents = myStudents;