import { Outlet } from "react-router-dom";
import SidebarWithNavbar from "../components/layouts/SidebarWithNavbar";

const DashboardLayout = () => {
  return (
    <main>
      <SidebarWithNavbar />
      <div className="p-4 pt-20 sm:ml-64">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
