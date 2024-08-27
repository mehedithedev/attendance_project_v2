const mongoose = require('mongoose')


const attendenceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    status:{
        type: String,
        enum: ['present', 'absent', 'take excuse']
    }
})
const studentRecordSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    attendance:{
         type: [attendenceSchema],
         default: [],
    }
})



const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

module.exports = StudentRecord;