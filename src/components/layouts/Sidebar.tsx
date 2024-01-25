import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray p-4 lg:p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 rounded-md transition-all  flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 rounded-md transition-all  flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 rounded-md transition-all  flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service list</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
