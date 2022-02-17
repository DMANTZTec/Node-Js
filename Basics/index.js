// old functionality ---- using prototype approach
/* 
function Employee(){
    this.name = '';
}

var emp = new Employee();

Employee.prototype.setName = function(x){
    this.name = x;
}

Employee.prototype.welcome = function(){
    console.log(this.name);
}

emp.setName('Dmantz');
emp.welcome();
*/

// ------using Es6------ //

/* class Employee{
    name = '';
    setName(x){
        this.name = x;
    }
    welcome(){
        console.log(this.name);
    }
}
const emp = new Employee(); // declare variable let, const, var because when we write the code "strict mode" it will show error
emp.setName('Dmantz');
emp.welcome(); */


/* ----Json object and arrow function ----- */


/* 'use strict'
var Employee = {
    name: 'mamatha',
    Designation: 'developper',
    location: 'hydrabad',
    age: 22,
    salary: 15000
}
console.log(Employee);
console.log(Employee.location); */


//narmal we wrote the functions like this //
/*
'use strict'
function emp(id){
    console.log(id);
}
emp(300)
*/

// using fat arrow method //
/*
'use strict'
let emp = (id) => {
    console.log(id);
}
emp(300)
*/

/*
'use strict'
var emp = (id) => {
    console.log(id);
}
var employee = () => {
    emp(500)
}
employee()
*/

/*
'use strict'
let myAddition = (x, y) => {
    console.log(x+y);
}
myAddition(100, 200)
*/


/*
'use strict'
let sum = (x, y) => console.log(x+y);
sum(10, 20)
*/

/*
'use strict'
let isPositive = (number) => console.log(number > 0);
isPositive(100)
*/

/*
'use strict'
let randomNumber = () => {
    console.log(Math.random())
}
randomNumber()
*/

/* -----Anonymous Function ------ */
 /*
'use strict'
function emp(){
    console.log('Dmantz')
}
emp()
*/


// Anonymous Function using 
/*
'use strict'
let x = function (){
    console.log('Dmantz')
}
x()
*/

// Anonymous Function using fat arrow method
/*
'use strict'
let x =  () => {
    console.log('Dmantz')
}
x()
*/

// Anonymous Function using fat arrow method with parametrs
/*
'use strict'
let x =  (name) => {
    console.log(name)
}
x('Dmantz')
*/

/* we can in the objects anonymous function */
/*
'use strict'
const emp = {
    name: 'Dmantz',
    myFn: function(){
        console.log('welcome to Dmantz Technologies')
    }
}
console.log(emp.myFn())
*/


/*
'use strict'
function Employee(x){
    console.log(x)
}
function Designation(dept, code) {//send fun as a parameter dept, code
    dept(code)
}

Designation(Employee, 125)
*/

/* using anonymous fun using variable  */
/*
'use strict'
let a1 = function (x){
    console.log(x)
}
let a2 = function (dept, code) {//send fun as a parameter dept, code
    dept(code)
}

a2(a1, 125)
*/

/* using anonymous fun using variable and fat arrow method */
/*
'use strict'
let a1 =  (x) => {
    console.log(x)
}
let a2 = (dept, code) => {//send fun as a parameter dept, code
    dept(code)
}

a2(a1, 125)
*/

'use strict'
 
let a2 = (dept, code) => {//send fun as a parameter dept, code
    dept(code)
}

a2( (x) => {console.log(x)}, 125)




