import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage";
import RecommendedPage from "./pages/RecommendedPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/recommended" element={<RecommendedPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
