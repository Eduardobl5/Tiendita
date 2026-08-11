import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Clientes from "../pages/Clientes";


function AppRouter() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/clientes" element={<Clientes />} />

      </Route>

    </Routes>
  );
}

export default AppRouter;