const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Home route
router.get('/home', studentController.getHome);

//Student management routes
router.post('/addStudent', studentController.addStudent);
router.post('deleteStudent', studentController.deleteStudent);
router.post('updateStudent', studentController.updateStudent);



module.exports = router;