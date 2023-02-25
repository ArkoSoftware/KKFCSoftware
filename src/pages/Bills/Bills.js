import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineSearch, HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Bills = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[36px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">
          Bills <HiStar className="inline text-xs" />
        </h2>
        <div className="flex items-center gap-3">
          <Link to="/Bills/NewBill">
            <button className="py-1 px-3 rounded text-sm text-white bg-[#097D0D]">
              New Bills
            </button>
          </Link>
          <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
            <BsThreeDots />
          </button>
        </div>
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

      <div className="border-b inline-block mt-12">
        <button className="py-1 px-10 border-b border-transparent hover:border-[#2825CB] text-[#2825CB] text-sm duration-500">
          Bills
        </button>
        <button className="py-1 px-10 border-b border-transparent hover:border-[#2825CB] text-[#2825CB] text-sm duration-500">
          Recurring Template
        </button>
      </div>
      <div className="relative mt-4">
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
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Due Date</span>
                <span className="block text-left text-xs">Invoice Date</span>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Status</span>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Customer</span>
                <span className="block text-left text-xs">Number</span>
              </th>
              <th className="font-normal text-sm">
                <span className="block text-left text-xs">Amount</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>
                <span className="block text-left text-xs">5 days ago</span>
                <span className="block text-left text-xs">18th Feb 2023</span>
              </td>
              <td>
                <span className="bg-blue-200 text-blue-500 text-xs py-1 px-4 rounded-xl">
                  Partial
                </span>
              </td>
              <td>
                <span className="block text-left text-xs">Mr.Name Surname</span>
                <span className="block text-left text-xs">BILL-5632</span>
              </td>
              <td>
                <span className="block text-left text-xs">Rs.20k</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bills;
