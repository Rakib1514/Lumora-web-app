import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router";

const DashboardNav = () => {
  const [manageItemBtnToggle, setManageItemBtnToggle] = useState(false);

  return (
    <nav className="min-h-screen w-[18vw] bg-gradient-to-b from-primary to-secondary text-white">
      <div className="flex items-center gap-2">
        <span className="text-xl px-2 font-semibold">Dashboard</span>
        <div className="flex-1 h-px bg-white"></div>
      </div>

      <ul className="flex flex-col">
        <li className="px-4 py-1.5 hover:bg-white/20">
          <button
            onClick={() => setManageItemBtnToggle(!manageItemBtnToggle)}
            className="w-full text-left "
          >
            Manage Items
          </button>
        </li>

        {/* Child links */}
        <AnimatePresence>
          {manageItemBtnToggle && (
            <motion.ul
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col ml-4 pl-2 border-l border-white/30"
            >
              <li>
                <NavLink
                  to="/dashboard/add-item"
                  className="block px-4 py-1.5 hover:bg-white/20 w-full"
                >
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/edit-item"
                  className="block px-4 py-1.5 hover:bg-white/20 w-full"
                >
                  Edit Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/delete-item"
                  className="block px-4 py-1.5 hover:bg-white/20 w-full"
                >
                  Delete Item
                </NavLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        
        <li className="px-4 py-1.5 hover:bg-white/20">
          <NavLink to="/dashboard/pages" className="block w-full">
            Manage Pages
          </NavLink>
        </li>
        <li className="px-4 py-1.5 hover:bg-white/20">
          <NavLink to="/dashboard/users" className="block w-full">
            Manage Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
