import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { current } from "./redux/auth/operations.js";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage.jsx";

import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Modal from "./components/Modal/Modal.jsx";

import { useSaveLastRoute } from "./hooks/useSaveLastRoute.jsx";

function App() {
  const dispatch = useDispatch();
  useSaveLastRoute();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/recommended"
          element={
            <PrivateRoute
              restrictedTo="/login"
              component={<RecommendedPage />}
            />
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute restrictedTo="/login" component={<MyLibraryPage />} />
          }
        />
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
      <Modal />
    </>
  );
}

export default App;
