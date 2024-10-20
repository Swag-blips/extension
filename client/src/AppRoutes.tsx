import { Navigate, Route, Routes } from "react-router-dom";
import path from "path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home Page</span>} />
      <Route path="/user-profile" element={<span>User Profile</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
