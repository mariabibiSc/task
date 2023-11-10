import React from "react";
import "./App.scss";
import Login from "./screens/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import TableScreen from "./screens/TableScreen";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/appointments"
        element={
          <ProtectedRoutes>
            <TableScreen />
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
