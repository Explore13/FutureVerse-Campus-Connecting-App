const UserModel = require('../models/userSchema');
const MarketModel = require('../models/marketSchema');

exports.createMarketPost = async (req, res) => {
    try {
        // Extract JSON payload from the form data
        const { content, image, createdBy, price } = req.body;
        let fileName = ''
        if(req.file){
            fileName = req.file.filename;
        }

        // Validate the request data
        if (!price || !content || !createdBy) {
            return res.status(400).json({error: 'Missing required fields'});
        }

        // Check if the user exists
        const existingUser = await UserModel.findOne({userId: createdBy});
        if (!existingUser) {
            return res.status(404).json({error: 'User not found'});
        }

        // Create a new post instance
        const newPost = new MarketModel({
            content,
            createdBy: existingUser._id, // Reference to the user who created the post
            image: fileName, // Store the image file as binary data
            price,
        });

        // Save the post to the database
        await newPost.save();

        // Respond with the created post
        res.status(201).json({
            message: 'Market created successfully!',
            createdPost: newPost,
        });
    } catch (error) {
        // Handle any errors
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
}


exports.getMarketByIdOrAllMarkets = async (req, res) => {
    try {
        // Check if a post ID is provided in the request parameters
        const {marketId} = req.params;

        if (marketId) {
            // If post ID is provided, find the post by its ID and populate the user details
            const market = await MarketModel.findOne({_id: marketId}).populate('createdBy');

            // Check if the post exists
            if (!market) {
                return res.status(404).json({error: 'Market not found'});
            }

            // Respond with the post including the populated user details
            res.status(200).json({
                message: 'Market found successfully!',
                market
            });
        } else {
            // If no post ID is provided, retrieve all posts and populate user details
            const markets = await MarketModel.find().populate('createdBy');
            // Calculate the count of users
            const marketCount = await MarketModel.countDocuments();

            // Respond with all posts including the populated user details
            res.status(200).json({
                message: 'Markets retrieved successfully!',
                count: marketCount,
                markets
            });
        }
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            error: error.message
        });
    }
}