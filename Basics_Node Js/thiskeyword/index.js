/* there is no fun and object */
console.log(this) // it will return empty object {}


/* using object and fun */
var myObject = {
    myFunction: function(){
        // console.log(this) 
        console.log(this === myObject) // it will return true
    }
}
myObject.myFunction() // it will return entire fun


/* using fun */
function myFunction(){
    // console.log(this)
    console.log(this === global) //it will return true
}
myFunction() // it will return global


//if called in the form obj.fun() ====> this equals obj
//otherwise this equals global

//examples
/* exm---1 */
const emp = {
    name: 'Dmantz',
    Designation(){
        // console.log(this); //it will return object
        // console.log(this === emp); //it will return true   
    }
}
// emp.Designation()
emp.show = function(){
    // console.log(this);
    console.log(this === emp); //it will return true 
    console.log(this === global); //it will return false
}
emp.show() //it will also return object


/* exm---2 */
function showEmp (name){
    // this.name  // it will return showEmp {}
    this.name = name // it will return showEmp {name: 'Dmantz}
    console.log(this);
}
const x = new showEmp('Dmantz') // new operator - it will create empty obj --showEmp {}

/* exm---3 */
const emp1 = {
    name: 'Dmantz',
    branch: ['Angular', 'React', 'Python', 'Java'],
    showBranch(){
        this.branch.forEach(function(branch){
            //console.log(branch);
            console.log(this.name, branch);
        },this)
    }
}
emp1.showBranch()