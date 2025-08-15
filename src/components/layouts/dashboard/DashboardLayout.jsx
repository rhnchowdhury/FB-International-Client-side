import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../dashboardPage/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <Sidebar></Sidebar>
      <div className="w-full min-h-screen max-h-screen bg-white p-4 sm:p-10 overflow-y-scroll">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
