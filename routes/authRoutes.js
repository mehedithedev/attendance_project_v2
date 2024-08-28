const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Views
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

//controller actions
router.post('/login', authController.login);
// Controller actions
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;