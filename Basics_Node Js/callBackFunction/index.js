// console.log('user 1 made a request')
// setTimeout(callMeBack, 5000);

// console.log('user 2 made a request')
// setTimeout(callMeBack, 5000);

// console.log('user 3 made a request')
// setTimeout(callMeBack, 5000);

// function callMeBack(){
//     console.log("Queried the Database and Delivered to user")
// }


 
// var fs = require('fs')
// console.log("program started")
// var myData = fs.readFileSync('data.txt') //syn means it will read line by line
// console.log(myData.toString())
// console.log("program ended")



// //using call back fun
// var fs = require('fs')
// console.log("program started");
// fs.readFile('data.txt', function(err, myData){
//     if(err){
//         return console.log(err);
//     }
//     else{
//         console.log(myData.toString())
//     }
// })
// console.log("program ended")


// //this is called call back hell and pyramid of doom, we dont write this format bcz code readability is not good
// var fs = require('fs')
// var file = 'data.txt'
// fs.exists(file, function(exists){
//     if(exists){
//         fs.stat(file, function(err, stat){
//             if(err){
//                 throw err
//             }
//             if(fs.Stats.isFile()){
//                 fs.readFile(file, "utf-8", function(err, data){
//                     if(err){
//                         throw err
//                     }
//                     console.log(data);
//                 })
//             }
//         })
//     }
// })

// 'use strict'
// var fs = require('fs')
// var file = 'data.txt'

// function myFile(err, data){
//     if(err){
//         throw err;
//     }
//     console.log(data);
// }

// function stat(err, stats){
//     if(err){
//         throw err;
//     }
//     if(stats.isFile()){
//         fs.readFile(file, "utf-8", myFile)
//     }
// }

// function fileExists(exists){
//     if(exists){
//         fs.stat(file, stat)
//     }
// }

// fs.exists(file, fileExists)



