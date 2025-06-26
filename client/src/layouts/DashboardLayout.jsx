import { Outlet } from "react-router";
import DashboardNav from "../components/dashboard-nav/DashboardNav";

const DashboardLayout = () => {
  return (
    <div>
      <div className="h-10 flex justify-between w-11/12 mx-auto items-center">
        <span className="font-bold uppercase text-2xl">Lumora</span>
      </div>
      <div className="flex gap-[2vw]">
        <div>
          <DashboardNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
