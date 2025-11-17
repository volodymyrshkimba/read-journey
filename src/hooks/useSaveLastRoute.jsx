import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSaveLastRoute = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/recommended" ||
      location.pathname === "/library"
    ) {
      localStorage.setItem("lastRoute", location.pathname);
    }
  }, [location.pathname]);
};
