import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
    // let user = localStorage.getItem("User");

    const navigate = useNavigate();
    const [userData, setUserData] = useState({ name: '', email: '' });

    // Function to handle logout with error handling
    const handleLogout = async () => {
        try {
            const confirmed = window.confirm("Are you sure you want to logout?");
            if (confirmed) {
                localStorage.removeItem('User');
                navigate("/login");
            }
        } catch (error) {
            console.error("Error during logout:", error); // Log error for debugging
            alert("An error occurred during logout. Please try again."); // User-friendly message
        }
    };
    const storedUser = localStorage.getItem('User');


    useEffect(() => {
        try {
            //getting data from localStorage
            const storedUser = localStorage.getItem('User');
            if (storedUser) {
                setUserData(JSON.parse(storedUser));
                if (!storedUser) {
                    navigate("/");

                }
            }
        } catch (error) {
            console.error("Error retrieving user data:", error); // Log error for debugging
            alert("An error occurred while retrieving your information."); // User-friendly message
        }
    }, []);

    return (
        <>
            {
                !storedUser ? (<ul className="flex items-center gap-9 justify-evenly py-9">
                    <li className="bg-black hover:bg-gradient-to-t from-indigo-400 to-pink-400 text-white py-2 px-3 rounded-md">
                        <Link to="/login" className="py-4 px-2">Login</Link>
                    </li>
                    <li className="bg-black hover:bg-gradient-to-t from-indigo-400 to-pink-400 text-white py-2 px-3 rounded-md">
                        <Link to="/register" className="py-4">Register</Link>
                    </li>
                </ul>) : (

                    <button
                        className="mt-8 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                        onClick={handleLogout}
                        aria-label="Logout" // Accessibility for screen readers
                    >
                        Logout
                    </button>
                )
            }
            <div className="w-full h-screen bg-white flex flex-col items-center ">




                <h1 className="text-3xl font-bold mb-4">User Information</h1>
                <h2>Name: {userData.name}</h2>
                <p>Email: {userData.email}</p>
            </div>
        </>

    );
};

export default User;
