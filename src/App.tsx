import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Arrival from "./Pages/Arrival";
import ProtectedRoute from "./Components/ProtectedRoutes";

export default function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="/arrival" replace />} />
      <Route path="/arrival" element={<Arrival />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/*" element={<ProtectedRoute />}>
      </Route>
      
      <Route path="*" element={<Navigate to="/arrival" replace />} />
    </Routes>
  </>
  );
}