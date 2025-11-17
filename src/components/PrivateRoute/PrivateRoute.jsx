import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsSignedIn } from "../../redux/auth/selectors.js";

const PrivateRoute = ({ component: Component, restrictedTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsSignedIn);

  return isLoggedIn ? Component : <Navigate to={restrictedTo} />;
};

export default PrivateRoute;
