import { Outlet } from "react-router-dom";
import AdminHeaders from "./AdminHeaders";
import DashboardSideBar from "./DashboardSideBar";

const WorkspaceSharedLayout = () => {
  return (
    <div className="w-screen overflow-x-hidden overflow-y-auto md:flex md:flex-row ">
        <DashboardSideBar />
      <div className="   md:w-[80%] sm:px-3 md:px-5  py-5 xl:w-[86%] flex flex-col min-h-screen gap-4 ">
        <AdminHeaders />
        <Outlet />
      </div>
    </div>
  );
};

export default WorkspaceSharedLayout;
