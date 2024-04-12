const express = require('express');
const {
    createUser,
    getUserByIdOrAllUsers,
    updateUser
} = require('./../controllers/userController');

const userRouter = express.Router();

userRouter.route('/users/:userId?')
    .get(getUserByIdOrAllUsers)
    .post(createUser)
    .patch(updateUser)

module.exports = userRouter;