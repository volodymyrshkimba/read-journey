import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsSignedIn } from "../../redux/auth/selectors.js";

const RestrictedRoute = ({
  component: Component,
  restrictedTo = "/recommended",
}) => {
  const isLoggedIn = useSelector(selectIsSignedIn);

  const lastRoute = localStorage.getItem("lastRoute") || restrictedTo;

  return isLoggedIn ? <Navigate to={lastRoute} /> : Component;
};

export default RestrictedRoute;
