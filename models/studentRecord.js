<<<<<<< HEAD
const mongoose = require('mongoose')


const attendenceSchema = new mongoose.Schema({
=======
const mongoose = require('mongoose');


const attendanceSchema = new mongoose.Schema({
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168
    date: {
        type: Date,
        required: true,
    },
<<<<<<< HEAD
    status:{
        type: String,
        enum: ['present', 'absent', 'take excuse']
    }
})
const studentRecordSchema = new mongoose.Schema({
    name:{
=======
    status: {
        type: String,
        enum: ['present', 'absent'],
        required: true,
    }
});


const studentRecordSchema = new mongoose.Schema({
    name: {
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
<<<<<<< HEAD
    attendance:{
         type: [attendenceSchema],
         default: [],
    }
})

=======
    attendance: {
        type: [attendanceSchema],
        default: [],
    }
});
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168


const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

module.exports = StudentRecord;