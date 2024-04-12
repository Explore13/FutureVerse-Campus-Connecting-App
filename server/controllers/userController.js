const UserModel = require('../models/userSchema');

exports.createUser = async (req, res) => {
    try {
        // Extract data from the request body
        if (req.body) {
            const {userId, name, email, password, department, phNo, graduationYear} = req.body;

            // Check if a user with the same userId, email, or phone number already exists
            const existingUser = await UserModel.findOne({
                $or: [
                    { userId },
                    { email },
                    { phNo }
                ]
            });

            if (existingUser) {
                // If a user already exists, return an error response
                res.status(400).json({
                    message: 'A user with the same userId, email, or phone number already exists.'
                });
                return;
            }
            if (existingUser) {
                // If a user already exists, return an error response
                res.status(400).json({
                    message: 'A user with the same userId, email, or phone number already exists.'
                });
                return;
            }
            // Create a new user using the extracted data
            const newUser = new UserModel({
                userId,
                name,
                email,
                password,
                department,
                phNo,
                graduationYear
            });

            // Save the new user to the database
            await newUser.save();

            // Send a success response with the created user
            res.status(201).json({
                message: 'User created successfully!',
            });
        }else{
            res.status(400).json({
                message: 'Empty request body received.'
            });
        }
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error creating user:', error);
        res.status(400).json({
            message: 'An error occurred while creating the user.',
            error: error.message
        });
    }
}

exports.getUserByIdOrAllUsers = async (req, res) =>{
    try {
        // Retrieve the userId from the request parameters
        const { userId } = req.params;

        if (userId) {
            // If userId is provided, search for the user by userId in the database
            const user = await UserModel.findOne({ userId });

            if (user) {
                // If the user is found, send a success response with the user's data
                res.status(200).json({
                    message: 'User found successfully!',
                    user
                });
            } else {
                // If the user is not found, send a 404 error response
                res.status(404).json({
                    message: 'User not found'
                });
            }
        } else {
            // If userId is not provided, retrieve all users from the database
            const users = await UserModel.find();
            // Calculate the count of users
            const userCount = await UserModel.countDocuments();


            // Send a success response with the list of all users
            res.status(200).json({
                message: 'Users retrieved successfully!',
                count: userCount,
                users
            });
        }
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error retrieving user:', error);
        res.status(500).json({
            message: 'An error occurred while retrieving the user.',
            error: error.message
        });
    }
}

exports.updateUser = async (req, res) =>{
    try {
        // Retrieve the userId from the request parameters
        const { userId } = req.params;

        // Retrieve the data to update from the request body
        const updateData = req.body;
        // Remove userId from the update data if it is present
        delete updateData.userId;
        // Search for the user by userId and update the user
        const updatedUser = await UserModel.findOneAndUpdate(
            { userId },
            updateData,
            {
                new: true,
                runValidators: true,
            }
        );

        if (updatedUser) {
            // If the user is updated successfully, send a success response with the updated user's data
            res.status(200).json({
                message: 'User updated successfully!',
                user: updatedUser,
            });
        } else {
            // If the user is not found, send a 404 error response
            res.status(404).json({
                message: 'User not found',
            });
        }
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error updating user:', error);
        res.status(500).json({
            message: 'An error occurred while updating the user.',
            error: error.message,
        });
    }
}