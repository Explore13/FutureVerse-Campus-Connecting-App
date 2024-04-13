import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {loadAuthState} from "../../utils/LoadAuthState.js";

// Async action to handle login
export const login = createAsyncThunk(
    'auth/login',
    async ({ userId, password }) => {
        const response = await axios.post('http://localhost:4000/api/v1/login', {
            userId,
            password,
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
    }
);

// Async action to handle sign-up
export const register = createAsyncThunk(
    'auth/signUp',
    async (newUser) => {
        // Make a POST request to the sign-up endpoint with the user data
        const response = await axios.post('http://localhost:4000/api/v1/users', newUser);
        return response.data;
    }
);


const initialState = loadAuthState();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            // Remove the token from local storage upon logout
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.user = jwt.decode(action.payload.token);
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.user = jwt.decode(action.payload.token);
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
