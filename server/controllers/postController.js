const PostModel = require('../models/postSchema');
const UserModel = require('../models/userSchema');


exports.createPost = async (req, res) => {
    try {
        // Extract data from the request body
        const {title, content, createdBy} = req.body;

        // Validate the request data
        if (!title || !content || !createdBy) {
            return res.status(400).json({error: 'Missing required fields'});
        }

        // Check if the user exists
        const existingUser = await UserModel.findOne({userId: createdBy});
        if (!existingUser) {
            return res.status(404).json({error: 'User not found'});
        }

        // Create a new post instance
        const newPost = new PostModel({
            title,
            content,
            createdBy: existingUser._id, // Reference to the user who created the post
        });

        // Save the post to the database
        await newPost.save();

        // Respond with the created post
        res.status(201).json({
            message: 'Post created successfully!',
            createdPost: newPost,
        });
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            error: error.message
        });
    }
}

exports.getPostByIdOrAllPosts = async (req, res) => {
    try {
        // Check if a post ID is provided in the request parameters
        const {postId} = req.params;

        if (postId) {
            // If post ID is provided, find the post by its ID and populate the user details
            const post = await PostModel.findOne({_id: postId}).populate('createdBy');

            // Check if the post exists
            if (!post) {
                return res.status(404).json({error: 'Post not found'});
            }

            // Respond with the post including the populated user details
            res.status(200).json({
                message: 'Post found successfully!',
                post
            });
        } else {
            // If no post ID is provided, retrieve all posts and populate user details
            const posts = await PostModel.find().populate('createdBy');
            // Calculate the count of users
            const postCount = await PostModel.countDocuments();

            // Respond with all posts including the populated user details
            res.status(200).json({
                message: 'Posts retrieved successfully!',
                count: postCount,
                posts
            });
        }
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            error: error.message
        });
    }
}