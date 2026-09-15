import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/Sidebar"

function DashboardLayout() {
  return (
    <div className="flex min-h-screen m-2 ">

      <div className="flex flex-row p-2">
        <Sidebar/>
      </div>
      
      <div className="flex-1 p-2">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout