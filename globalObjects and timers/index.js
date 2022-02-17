'use strict'
/* ----------global objects------ */
// console.log(__filename) // ----it will return path name
//console.log(__dirname)// ----it will return folder name

/* ----------Timers---------- */

/* setTimeout */
// var x = () => console.log("Time Out Method")
// setTimeout(x, 2000) //----setTimeout it will execute o/p only once after 2000ms

/* setInterval */
// var x = () => console.log("Time Interval Method")
// setInterval(x, 2000) //----setInterval it will execute o/p contineuosly after 2000ms


/* clearTimeout */
// let x = () => console.log("Clear Time Method")
// let t = setTimeout(x, 2000) //-----clearTimeout it will not execute o/p even after 2000ms
// clearTimeout(t)

/*setImmediate */
// let x = () => console.log("In Time Method")
// let y = () => console.log("Out Time Method")
// let t = setInterval(x, 1000) 
// setImmediate(() => {setInterval(y, 2000)})

