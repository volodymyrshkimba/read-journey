import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSaveLastRoute = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/recommended" ||
      location.pathname === "/library" ||
      location.pathname.split("/")[1] === "reading"
    ) {
      localStorage.setItem("lastRoute", location.pathname);
    }
  }, [location.pathname]);
};
