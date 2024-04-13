import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoute() {
    // Access the authentication state from the Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If the user is authenticated, render the Outlet to display child routes
    if (isAuthenticated) {
        return <Outlet/>;
    }

    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login"/>;
}

export default ProtectedRoute;
