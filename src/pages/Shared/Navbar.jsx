import React from "react";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[100px] px-6 py-[29px]">
      <div className="flex items-center ml-[200px]">
        <img className="w-6 h-6 mr-2" src={logo} alt="Logo" />
        <span className="text-primary text-2xl font-bold">Job Task</span>
      </div>
    </nav>
  );
};

export default Navbar;
