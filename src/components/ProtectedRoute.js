import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = (props) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
