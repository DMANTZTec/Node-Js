var myTeacher = require('./teacher')
myTeacher.teacherName()
myTeacher.teacherExperience()

/* custom modules */
var myStaff = new myTeacher.Staff;
myStaff.getStaffId(100)
myStaff.showName()