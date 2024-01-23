import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className=" h-16 ">
      <nav className="w-full max-w-[1220px] h-full px-[20px]  mx-auto bg-green-500 flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
