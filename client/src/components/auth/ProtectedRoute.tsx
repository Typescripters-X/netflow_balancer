import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/login/authStore";

const ProtectedRoute = () => {
    // Fetch the access token from Zustand store
    const access_token = useAuthStore((state) => state.access_token);

    // Access location for redirecting after login
    const location = useLocation();

    // Check if access token exists
    return (
        access_token
            ? <Outlet /> // Render the protected content if access token exists
            : <Navigate to={"/"} state={{ from: location }} replace /> // Redirect to home if no access token
    );
}

export default ProtectedRoute;
