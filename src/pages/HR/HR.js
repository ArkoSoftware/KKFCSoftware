import React from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import pen from "../../assets/pen.png";
import trash from "../../assets/trash.png";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const HR = () => {
  return (
    <>
      <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
        <div className="md:flex justify-between items-center">
          <h2 className="text-xl mb-10 md:m-0">HR</h2>
          <div className="flex items-center gap-5">
            <Link to="/hr/payrol">
              <button className="py-1 px-5 rounded text-sm text-white bg-[#097D0D]">
                Payroll
              </button>
            </Link>
            <Link to="/hr/addEmployee">
              <button className="py-1 px-7 rounded text-sm text-white bg-[#097D0D]">
                Add Employee
              </button>
            </Link>
            <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
              <BsThreeDots />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-7">
          <p className="text-xs text-gray-500">
            Check their individual data or view
            <br />
            their payroll all at once.
          </p>
          <div className="relative">
            <BsSearch className="absolute top-0 bottom-0 my-auto ml-3 text-gray-400" />
            <input
              type="text"
              name=""
              id=""
              className="input input-sm input-bordered w-[298px] pl-8"
              placeholder="Search employee"
            />
          </div>
        </div>

        <div className="overflow-x-auto mt-14 px-14">
          <table className="w-full">
            <thead className="bg-[#EAEAEA] rounded">
              <tr>
                <th className="font-normal py-2 text-gray-500 rounded-tl-xl rounded-bl-xl">
                  NAME
                </th>
                <th className="font-normal py-2 text-gray-500">LOCATION</th>
                <th className=" rounded-tr-xl  rounded-br-xl"></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((data) => (
                <tr className="border-b-2">
                  <td className="text-center text-sm py-3">Andie Bell</td>
                  <td className="text-center text-sm py-3">
                    Civil Mall, Kathmandu
                  </td>
                  <td className="text-center text-sm flex justify-between  py-3">
                    <p className="text-gray-500">5 days ago</p>
                    <div className="flex gap-5 mr-2">
                      <Link to="/HR/EditInfo">
                        <button>
                          <img src={pen} alt="" />
                        </button>
                      </Link>
                      <label htmlFor="deleteModal" className="cursor-pointer">
                        <img src={trash} alt="" />
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-2 mr-1">
            <button className="text-blue-600 text-sm underline">
              View More
            </button>
          </div>
        </div>
      </section>
      <DeleteModal />
    </>
  );
};

export default HR;
