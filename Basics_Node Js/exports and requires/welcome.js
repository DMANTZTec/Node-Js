function hello(){
    console.log("Welcome User");
}
// exports.myWelcome = hello;

// //we can export properties also
// exports.name = 'Mamatha'

// //using fat arrow method
// this.welcomeUser = userName => {
//     console.log("Good Morning ..." + this.name);
//     console.log(`Good Morning ${userName}`);
// }


module.exports = {
    name: "Mamatha",
    myWelcome: hello,
    welcomeUser: userName => {
        console.log(`Good Morning ${userName}`);
    }
}