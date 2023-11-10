import React from "react";
import logo from "../assets/ccript Logo Green.svg";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const NavBarComp = () => {
  const navigate = useNavigate();
  // =============== ~ logout button click func ~ =======================
  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // =============== ~ logout button click func ~ =======================
  return (
    <nav className="bg-white shadow-lg p-4 w-ful flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-25   h-25  mr-2" />
      </div>
      <button
        title="logout"
        onClick={logoutClick}
        className="bg-[#EF4444] hover:bg-red-400 text-white font-semibold p-3 rounded"
      >
        <BiLogIn className="text-3xl" />
      </button>
    </nav>
  );
};

export default NavBarComp;
