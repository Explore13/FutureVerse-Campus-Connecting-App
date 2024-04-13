import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1/posts';

const initialState = {
    posts: [],
    error: '',
    status: 'idle'
}

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
    try {
        const response = await axios.get(BASE_URL);

        // `response.data` contains the data returned by the server
        const data = response.data;
        return data.posts; // Assuming `data.posts` contains the array of posts
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

export const createPost = createAsyncThunk('/posts/createPost', async (newPost) => {
    try {
        const response = await axios.post(BASE_URL, newPost);

        // `response.data` contains the data returned by the server
        const data = response.data;
        console.log('Created post:', data);
        return null;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
});


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                console.log(action.payload)
                // Use a Set to remove duplicate posts
                const allPosts = action.payload;
                // Convert the Set back to an array
                state.posts = Array.from(allPosts)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(createPost.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsError = (state) => state.posts.error;
export const getPostsStatus = (state) => state.posts.status;

export default postSlice.reducer;