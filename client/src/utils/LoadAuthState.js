import jwt from "jsonwebtoken";

export const loadAuthState = () => {
    const token = localStorage.getItem('token');
    if (token) {
        // Validate the token (optional)
        // Check if the token is valid and not expired

        // Return the initial state with isAuthenticated set to true
        return {
            isAuthenticated: true,
            token,
            user: jwt.decode(token),
            status: 'succeeded',
            error: null,
        };
    } else {
        // Return the initial state with isAuthenticated set to false
        return {
            isAuthenticated: false,
            token: null,
            user: null,
            status: 'idle',
            error: null,
        };
    }
};
