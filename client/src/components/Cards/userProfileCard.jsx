import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const UserProfileCard = ({ onClose }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from the backend based on the logged-in user's ID
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const decodedToken = jwt.decode(token);
                const userId = decodedToken.userId;
                console.log(userId);
                const response = await axios.get(`http://localhost:4000/api/v1/users/${userId}`);
                setUserData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="absolute bg-purple-100 top-16 right-15 shadow-md rounded-lg p-4 z-10">
            <h2 className="text-xl text-center font-bold mb-4">User Profile</h2>
            {userData && (
                <>
                    <p><strong>Name:</strong> {userData.user.name}</p>
                    <p><strong>Email:</strong> {userData.user.email}</p>
                    <p><strong>Department:</strong> {userData.user.department}</p>
                    <p><strong>Phone Number:</strong> {userData.user.phNo}</p>
                    <p><strong>Graduation Year:</strong> {userData.user.graduationYear}</p>
                </>
            )}
            <div className="flex justify-center">
                <button
                    onClick={onClose}
                    className="text-blue-600 hover:text-red-800 font-semibold mt-4"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default UserProfileCard;
