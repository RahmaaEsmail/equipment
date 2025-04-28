import { Navigate, Outlet } from "react-router-dom";
import { configs } from "../configs"

export default function ProtectedRoutes() {
    const isLogin = localStorage.getItem(configs.STORAGE_TOKEN_NAME);
    return (
      isLogin ? <Outlet /> : <Navigate to="/login"/>
    )
}