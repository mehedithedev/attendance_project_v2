const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AttendanceManager = require('../models/attendanceManager.js');
require('dotenv').config();

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await AttendanceManager.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid username or password.');
        }

        // Verify the password using Bcrypt
        const result = await bcrypt.compare(password, user.password);

        if (!result) {
            return res.status(401).send('Invalid username or password');
        }

        // Generate the JWT
        const token = jwt.sign({
            id: user._id.toString(),
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};