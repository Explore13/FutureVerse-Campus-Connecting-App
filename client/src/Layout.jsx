import {Navigate, Outlet, useLocation} from 'react-router-dom'
import Header from "./components/Header/Header.jsx";
import {useSelector} from "react-redux";

function Layout() {
    // Use useLocation to determine the current path
    const location = useLocation();

    // Specify the paths where the header should not be displayed
    const hideHeaderPaths = ['/login', '/register'];

    // Determine whether the header should be shown
    const showHeader = !hideHeaderPaths.includes(location.pathname);


    return (

        <div>
            {/* Conditionally render the header */}
            {showHeader && <Header/>}

            {/* Outlet to render the child routes */}
            <main>
                <Outlet />
            </main>

            {/* Conditionally render the footer (if applicable) */}
            {/*{showHeader && <footer>Footer Content</footer>}*/}
        </div>
    );
}

export default Layout
