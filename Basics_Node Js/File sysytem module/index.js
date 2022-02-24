// var fs = require('fs') 


/* ----data read asynchronously(no waiting for data) -----*/
// fs.readFile("data.txt", function(err, data) { //async-- program exection not block --- retrive complete data after it will return the data 
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Async Form of data:" + data)
//     }
// })
// console.log("Welcome to Dmantz Technologies")



/* ----data read synchronously(waiting for data) -----*/
// var data = fs.readFileSync("data.txt") //it will stop untill the data retrive
// console.log("Sync Mode of Data:" + data)
// console.log("Welcome to Dmantz Technologies")


/*------- syn, async, promise, try, catch --------*/

/*this is sync--step by step process */
// function getEmpId(){
//     console.log("Getting for employee Id..")
// }
// function showEmpDetails(){
//     console.log("Employee Details are...")
// }
// getEmpId()
// showEmpDetails()


/*this is async--no step by step  process */
// function getEmpId(){
//     setTimeout(() => {
//         console.log("Getting for employee Id..")

//     }, 5000);
// }
// function showEmpDetails(){
//     console.log("Employee Details are...")
// }
// getEmpId()
// showEmpDetails()

/* sync use try, catch or promise method */

// function showEmpDetails(){
//     console.log("Employee Details are...")
// }
// try{
//     console.log("Getting for Employee Id..")
// }
// catch(err){
//     console.log("Error While retrievingg Employee Id..." + err)
// }
// finally{
//     showEmpDetails()
// }


 //use promise
 function showEmpDetails(){
         console.log("Employee Details are...")
     }
 var emp = new Promise((res, rej) => {
    console.log("Getting for Employee Id..")
    // res() //data recieved then block work
    rej() // catch block execute
 }).then((data)=>{
    showEmpDetails()
 }).catch((err)=>{
     console.log("Error While retrievingg Employee Id..." + err)
 })


