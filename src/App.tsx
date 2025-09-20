import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import ProtectedRoute from "./Components/ProtectedRoutes";
import Home from "./Pages/ProtectedRoutes/Home";
import Hotels from "./Pages/ProtectedRoutes/Hotels";
import Places from "./Pages/ProtectedRoutes/Places";
import Transport from "./Pages/ProtectedRoutes/Transport";
import Settings from "./Pages/ProtectedRoutes/Settings";
import Arrival from "./Pages/Arrival";

export default function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Navigate to="/arrival" replace />} />
            <Route path="/arrival" element={<Arrival />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Routes>

        <Routes>
          <Route path="/*" element={<ProtectedRoute />}>
            <Route path="home" element={<Home />}/>
            <Route path="hotels" element={<Hotels />}/>
            <Route path="places" element={<Places />}/>
            <Route path="transport" element={<Transport />}/>
            <Route path="settings" element={<Settings />}/>
          </Route>
          <Route path="*" element={<Navigate to="/arrival" replace />} />
        </Routes>
    </>
  );
}