import React from "react";
import { HiOutlineSearch, HiStar, HiOutlineUserCircle } from "react-icons/hi";

const Vendors = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[36px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">
          Vendors <HiStar className="inline text-xs" />
        </h2>
        <button className="py-1 px-3 rounded text-sm text-white bg-[#097D0D]">
          New Vendor
        </button>
      </div>

      <div className="flex justify-between mx-10 mt-10">
        <div className="flex px-7 py-2 flex-col items-center">
          <h3 className="text-3xl text-[#2825CB]">Rs.200K</h3>
          <div className="bg-gray-400 h-[1px] w-10 mt-3 mb-1"></div>
          <p className="text-sm text-gray-500">Overdue</p>
        </div>
        <div className="flex px-7 py-2 flex-col items-center">
          <h3 className="text-3xl text-[#2825CB]">Rs.20K</h3>
          <div className="bg-gray-400 h-[1px] w-10 mt-3 mb-1"></div>
          <p className="text-sm text-gray-500">Open</p>
        </div>
        <div className="flex px-7 py-2 flex-col items-center">
          <h3 className="text-3xl text-[#2825CB]">Rs.0K</h3>
          <div className="bg-gray-400 h-[1px] w-10 mt-3 mb-1"></div>
          <p className="text-sm text-gray-500">Draft</p>
        </div>
      </div>

      <div className="relative mt-16">
        <p className="absolute top-2 left-2">
          <HiOutlineSearch />
        </p>
        <input
          type="text"
          className="w-full border-b py-1 pl-8 pr-2 focus:outline-none"
          name=""
          id=""
          placeholder="Search or filter result"
        />
      </div>

      <div className="overflow-x-auto w-full mt-5">
        <table className="table-normal w-full">
          <thead>
            <tr className="border-b">
              <th>
                <label>
                  <input type="checkbox" className="" />
                </label>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Name</span>
                <span className="block text-left text-xs">Tax Number</span>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Email</span>
                <span className="block text-left text-xs">Phone</span>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Country</span>
                <span className="block text-left text-xs">
                  Country Currency
                </span>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Open</span>
                <span className="block text-left text-xs">Overdue</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <th>
                <label>
                  <input type="checkbox" className="" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl text-gray-400">
                    <HiOutlineUserCircle />
                  </span>
                  <div>
                    <p className="text-xs">Baltra Electronics</p>
                  </div>
                </div>
              </td>
              <td>
                <span className="block text-left text-xs">N/A</span>
                <span className="block text-left text-xs">N/A</span>
              </td>
              <td>
                <span className="block text-left text-xs">N/A</span>
                <span className="block text-left text-xs">N/A</span>
              </td> 
              <td>
                <span className="block text-left text-xs">N/A</span>
                <span className="block text-left text-xs">N/A</span>
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Vendors;
