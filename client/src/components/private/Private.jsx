import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
    const isAuthenticated = !!localStorage.getItem("User"); // Check if user is authenticated

    return isAuthenticated ? <Outlet /> : <Navigate to="/register" />;
};

export default Private;
