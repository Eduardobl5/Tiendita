import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Clientes from "../pages/Clientes";
import Reportes from "../pages/Reportes";
import Productos from "../pages/Productos";
import Configuracion from "../pages/Configuracion";


function AppRouter() {

  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/clientes" element={<Clientes />} />

        <Route path="/reportes" element={<Reportes />} />

        <Route path="/productos" element={<Productos />} />

        <Route path="/configuracion" element={<Configuracion />} />

      </Route>

    </Routes>
  );
}

export default AppRouter;