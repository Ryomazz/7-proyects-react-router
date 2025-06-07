import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout() {
   return (
      <div>
         <h1>DashboardLayout</h1>
         <Sidebar />
         <Outlet />
      </div>
   );
}
export default DashboardLayout;
