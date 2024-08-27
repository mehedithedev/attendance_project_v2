const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const authController = require('../controllers/authController')

<<<<<<< HEAD
// views
router.get('/login', (req, res) =>{
    res.render('login');
});
=======

>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168

//views
router.get('/login', (req, res) =>{ res.render('login');});
router.get('/register', (req, res) =>{res.render('register');});

<<<<<<< HEAD
// controller actions
router.post('/login', authController.login);
router.post('/register', authController.register);


=======
//controller actions
router.post('/register', authController.register);
>>>>>>> 8b953f7a5bd3f3514fe6026a61cc1a84a3cb1168



module.exports = router;