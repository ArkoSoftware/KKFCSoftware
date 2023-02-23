import React from "react";
import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { sidebarData } from "./SidebarData";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <ul className="menu p-4 w-64 bg-black text-base-content">
      {sidebarData.map((data, idx) => (
        <li key={idx} className="hover:bg-[#2B2B2B]">
          <Link to={data.link} className="text-white">
            {data.icon} {data.text}
          </Link>
        </li>
      ))}
      <li>
        <button onClick={() => logOut()} className="bg-red-600 text-white">
          <MdLogout /> LogOut{" "}
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
