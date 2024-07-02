import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/LoginAuthContext";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const Navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated) Navigate("/");
    },
    [isAuthenticated, Navigate]
  );
  return children;
}

export default PrivateRoute;
