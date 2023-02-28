import React from "react";
import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { sidebarData } from "./SidebarData";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <ul className="menu p-4 pt-[30px] px-[20px] w-[210px] bg-black text-base-content">
      <li>
        <Link to="/" className="bg-transparent">
          <img src={logo} className="w-[120px] mb-[41px]" alt="" />
        </Link>
      </li>
      {sidebarData.map((data, idx) => (
        <li key={idx}>
          <NavLink
            to={data.link}
            className={({ isActive }) =>
              isActive
                ? "bg-[#2B2B2B] hover:bg-[#2B2B2B] text-white rounded-none mb-3 text-xs"
                : "bg-black hover:bg-[#2B2B2B] text-white rounded-none mb-3 text-xs"
            }
            end
          >
            {data.icon}
            {data.text}
          </NavLink>
        </li>
      ))}
      <li>
        <button
          onClick={() => logOut()}
          className="bg-red-600 text-white mt-3 text-xs"
        >
          <MdLogout /> LogOut{" "}
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
