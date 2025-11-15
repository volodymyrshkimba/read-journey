import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsSignedIn } from "../../redux/auth/selectors.js";

const RestrictedRoute = ({
  component: Component,
  restrictedTo = "/recommended",
}) => {
  const isLoggedIn = useSelector(selectIsSignedIn);

  return isLoggedIn ? <Navigate to={restrictedTo} /> : Component;
};

export default RestrictedRoute;
