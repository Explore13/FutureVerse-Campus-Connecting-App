import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {logout} from '../../redux/slices/AuthSlice.js';
import UserProfileCard from "../Cards/userProfileCard.jsx";


export default function Header() {
    // Access the isAuthenticated state from the Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [showProfileCard, setShowProfileCard] = useState(false);

    console.log(isAuthenticated);

    // Create a useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Create a useNavigate hook to navigate between routes
    const navigate = useNavigate();

    // Handle logout functionality
    const handleLogout = () => {
        // Dispatch the logout action to update the authentication state
        dispatch(logout());

        // Optionally, navigate to the login page
        navigate('/login');
    };


    const toggleProfileCard = () => {
        setShowProfileCard(!showProfileCard);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl font-extralight text-blue-600 sm:text-3xl">
                            Future
                            <span className="text-2xl font-medium text-orange-600 sm:text-3xl">
                                Verse
                            </span>
                        </h1>
                    </Link>


                    <div className="flex items-center lg:order-2">
                        <div>
                            <button
                                onClick={toggleProfileCard}
                                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Profile
                            </button>
                            {showProfileCard && (
                                <UserProfileCard  onClose={toggleProfileCard}/>
                            )}
                        </div>

                        {isAuthenticated ? (
                            // Render a button to handle logout
                            <button
                                onClick={handleLogout}
                                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log Out
                            </button>
                        ) : (
                            // Render a link to navigate to the login page
                            <Link
                                to="/login"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log In
                            </Link>
                        )}
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* Render navigation links for authenticated users */}
                            {isAuthenticated && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${
                                                    isActive ? "text-blue-700" : "text-gray-700"
                                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/notice"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${
                                                    isActive ? "text-blue-700" : "text-gray-700"
                                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                            }
                                        >
                                            Notices
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${
                                                    isActive ? "text-blue-700" : "text-gray-700"
                                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                            }
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${
                                                    isActive ? "text-blue-700" : "text-gray-700"
                                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                            }
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
