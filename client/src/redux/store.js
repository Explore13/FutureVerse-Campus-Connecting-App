import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/PostSlice.js'
import authReducer from "./slices/AuthSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer
    },
})
