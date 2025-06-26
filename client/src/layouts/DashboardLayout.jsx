import { Link, Outlet } from "react-router";
import DashboardNav from "../components/dashboard-nav/DashboardNav";

const DashboardLayout = () => {
  return (
    <div>
      <div className="h-10 flex justify-between w-11/12 mx-auto items-center">
        <Link to={'/'} className="font-bold uppercase text-2xl">Lumora</Link>
      </div>
      <div className="flex gap-[2vw]">
        <div className="min-h-screen ">
          <DashboardNav />
        </div>
        <div className="flex-1 mr-[2vw]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
