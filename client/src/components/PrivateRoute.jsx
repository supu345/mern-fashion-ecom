import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  element: Element,
  isAuthenticated,
  userRole,
  allowedRole,
  ...rest
}) => {
  // Check if the user is authenticated and has the correct role
  if (isAuthenticated && userRole === allowedRole) {
    return <Element {...rest} />;
  } else {
    // Redirect to login or an unauthorized page if not authenticated or incorrect role
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
