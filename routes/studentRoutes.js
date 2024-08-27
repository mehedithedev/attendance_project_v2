const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
<<<<<<< HEAD

// Home route
router.get('/home', studentController.getHome);
=======
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168

//Home route
router.get('/home', studentController.getHome);



module.exports = router;