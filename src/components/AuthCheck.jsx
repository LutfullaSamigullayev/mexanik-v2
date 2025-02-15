import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function AuthCheck() {
  // const isAuthenticated = useSelector((state) => state.auth);
  const login = localStorage.getItem("login");

  if (!login) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
