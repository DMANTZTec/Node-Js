/* when we use that particular fun in another file use this */

// function teacherName(){
//     console.log("Teacher Name")
// }
// function teacherExperiance(){
//     console.log("Teacher Experiance")
// }
// module.exports.teacherName = teacherName;
// module.exports.teacherExperiance = teacherExperiance;


/*   use in this file total(everywhere) ,,,,use this method */
module.exports = {
    teacherName: function teacherName(){
        console.log("Teacher Name")
    },
    teacherExperience: function teacherExperience(){
        console.log("Teacher Name")
    }
}

/* custom modules */
class Staff{
    name = 'Dmantz'
    getStaffId(id){
        console.log("Staff Id:" +id)
    }
    showName(){
        console.log("Staff Name:" +this.name)
    }
}
module.exports.Staff = Staff;