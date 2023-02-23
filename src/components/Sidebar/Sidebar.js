import React from "react";
import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { sidebarData } from "./SidebarData";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <ul className="menu p-4 pt-[30px] px-[35px] w-[276px] bg-black text-base-content">
      <li>
        <Link to="/" className="bg-transparent">
          <img src={logo} className="w-[170px] mb-[41px]" alt="" />
        </Link>
      </li>
      {sidebarData.map((data, idx) => (
        <li key={idx}>
          <Link
            to={data.link}
            className="hover:bg-[#2B2B2B] text-white rounded-none mb-3"
          >
            {data.icon}
            {data.text}
          </Link>
        </li>
      ))}
      <li>
        <button onClick={() => logOut()} className="bg-red-600 text-white mt-3">
          <MdLogout /> LogOut{" "}
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
