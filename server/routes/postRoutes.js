const express = require('express');
const {
    createPost,
    getPostByIdOrAllPosts
} = require('./../controllers/postController');


const postRouter = express.Router();

postRouter.route('/posts/:postId?')
    .get(getPostByIdOrAllPosts)
    .post(createPost)

module.exports = postRouter;