const Student = require('../models/Student');


async function addStudent(req, res){
    try {
     console.log(req.body,'req.body')
     let student = new Student(req.body);
     await student.save();
     console.log("data save successfully....");
     res.end("data added....");
    } catch (error) {
        console.log(error);

        
    }
}
const getStudent = async function(req, res){
    try {
        let students =  await Student.find({}); //select * from table-name
        console.log(students)
        res.send(students)
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={
    addStudent,
    getStudent
}