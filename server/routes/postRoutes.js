const express = require('express');
const {
    createPost,
    getPostByIdOrAllPosts
} = require('./../controllers/postController');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage });


const postRouter = express.Router();

postRouter
    .get('/posts/:postId?',getPostByIdOrAllPosts)
    .post('/posts',upload.single('image'),createPost)

module.exports = postRouter;