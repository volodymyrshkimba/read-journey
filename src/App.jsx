import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { current } from "./redux/auth/operations.js";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
import MyLibraryPage from "./pages/MyLibraryPage.jsx";

import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/recommended" element={<RecommendedPage />} />
      <Route path="/library" element={<MyLibraryPage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            restrictedTo="/recommended"
            component={<RegisterPage />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute
            restrictedTo="/recommended"
            component={<LoginPage />}
          />
        }
      />
    </Routes>
  );
}

export default App;
