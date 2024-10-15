import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1/markets';

const initialState = {
    posts: [],
    error: '',
    status: 'idle'
}
export const fetchMarkets = createAsyncThunk('/markets/fetchMarkets', async () => {
    try {
        const response = await axios.get(BASE_URL);

        // `response.data` contains the data returned by the server
        const data = response.data;
        return data.markets; // Assuming `data.posts` contains the array of posts
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

export const createMarketPost = createAsyncThunk('markets/createMarketPost', async (newPost) => {
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


const marketSlice = createSlice({
    name: 'markets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMarkets.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchMarkets.fulfilled, (state, action) => {
                state.status = "succeeded"
                console.log(action.payload)
                // Use a Set to remove duplicate posts
                const allMarkets = action.payload;
                // Convert the Set back to an array
                state.markets = Array.from(allMarkets)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            })
            .addCase(fetchMarkets.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(createMarketPost.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(createMarketPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase(createMarketPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectAllMarkets = (state) => state.markets.markets
export const getMarketsError = (state) => state.markets.error;
export const getMarketsStatus = (state) => state.markets.status;

export default marketSlice.reducer;
