import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); 
  if (token && token.trim() !== "" && token !== "undefined" && token !== "null") {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}