const StudentRecord = require('../models/studentRecord');
const AttendanceManager = require('../models/attendanceManager.js');

<<<<<<< HEAD
exports.getHome = async (req, res) => {
    try {
        const students = await StudentRecord.find({});
        const maxAttendanceCount = students.length;
        res.render('attendance.ejs', { students, maxAttendanceCount });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
=======
exports.getHome = async (req, res) =>{
    try{
        const students = await StudentRecord.find({});

        const maxAttendanceCount = students.length;

        res.render('attendance.ejs', {students, maxAttendanceCount});

    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168
