import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col ">
        <NavLink
          to="/admin"
          className="bg-gray p-3 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate"
        >
          Dashboard
        </NavLink>
        <NavLink to="/admin/service-list">Service list</NavLink>
        <NavLink to="/admin/add-service">Add service</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
