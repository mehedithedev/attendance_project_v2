const mongoose = require('mongoose');


//Defining the schema for the AttendanceManager
const attendanceManagerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'Attendance Manager',
        enum: ['Attendance Manager', 'Admin'],
    },
<<<<<<< HEAD
    
=======
  //  timestamps: true,
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168
});

const AttendanceManager = mongoose.model('AttendanceManager', attendanceManagerSchema);

module.exports = AttendanceManager;