import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../dashboardPage/Dashboard";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <Sidebar></Sidebar>
      <div className="w-full min-h-screen max-h-screen bg-[#0e0d0d] p-4 sm:p-10 overflow-y-scroll">
        <Outlet />
        {/* <Dashboard /> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
