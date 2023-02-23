import React from "react";
import { useContext } from "react"; 
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = ({sidebarOn, setSidebarOn}) => { 
  const { user, logOut } = useContext(AuthContext);
  return (
    <section>
      <div className="bg-[#2B2B2B] flex items-center justify-between px-5 py-3">
        <div className="flex items-center">
          <label
            className="block lg:hidden"
            onClick={() => setSidebarOn(!sidebarOn)}
            htmlFor="my-drawer"
          >
            {sidebarOn ? <FiX /> : <FiMenu />}
          </label>
          
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="flex items-center hover:cursor-pointer">
            <p className="border border-white text-white p-1 rounded-full mr-2">
              <FiUser />
            </p>
            <p className="text-white">{user?.displayName}</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li className="bg-red-600 text-white rounded-lg">
              <button onClick={() => logOut()}>
                LogOut <MdLogout />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
