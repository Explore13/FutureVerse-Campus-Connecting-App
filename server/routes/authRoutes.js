const express = require("express");
const jwt = require("jsonwebtoken");
const {login, protect} = require("../controllers/authController");
const authRouter = express.Router();

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const SECRET_KEY = process.env.JWT_SECRET_KEY;
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.user = user;
        next();
    });
}

authRouter
    .post('/login',login)
    .get('/protected', authenticateToken, protect)

module.exports = authRouter;