const UserModel = require('../models/userSchema');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const {userId, password} = req.body;
    // Find the user by username
    const user = await UserModel.findOne({userId});

    if (user) {
        // Compare the provided password with the stored hashed password
        const isMatch = await user.comparePassword(password);

        const SECRET_KEY = process.env.JWT_SECRET_KEY;
        if (isMatch) {
            // Create a JWT token
            const token = jwt.sign({id: user._id, userId: user.userId},
                SECRET_KEY, {
                    expiresIn: '1h', // Token expires in 1 hour
                });
            res.json({token});
        } else {
            res.status(401).json({error: 'Invalid credentials'});
        }
    } else {
        res.status(401).json({error: 'Invalid credentials'});
    }
}

exports.protect = async (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
}