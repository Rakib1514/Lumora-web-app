import { NavLink } from "react-router";

const DashboardNav = () => {
  return (
    <nav className="min-h-screen w-[18vw] bg-gradient-to-b from-primary to-secondary text-white">
      <div className="flex items-center gap-2">
        <span className="text-xl px-2 font-semibold">Dashboard</span>
        <div className="flex-1 h-px bg-white"></div>
      </div>
      <ul className="flex flex-col">
        <li className="px-4 py-1.5 hover:bg-white/20">Manage Items</li>
        <li className="px-4 py-1.5 hover:bg-white/20">Manage pages</li>
        <li className="px-4 py-1.5 hover:bg-white/20">Mange Users</li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
