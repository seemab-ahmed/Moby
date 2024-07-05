import React from "react";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";
export default function Navbar({ className }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <nav
      className={` text-white flex justify-center items-center py-0 sm:py-4 px-5 sm:px-10  z-50 fixed w-[100%] bg-backgroundDark `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="hidden sm:block h-8 mr-2 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </nav>
  );
}
