import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Purchase = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">Purchase</h2>
        <div className="flex items-center">
          <input type="date" className="input input-bordered" />
          <div className="border w-[18px] h-0 mx-4"></div>
          <input type="date" className="input input-bordered" />
        </div>
      </div>

      <div className="mt-12 mr-6">
        <Link to="/purchase/vendors">
          <button className="bg-[#097D0D] w-28 mt-5 text-sm text-white px-3 py-[6px] rounded">
            Vendors
          </button>
        </Link>
        <Link to="/purchase/BaltraElectronics">
          <div className="flex items-center justify-between mt-6 mb-3">
            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <p className="text-3xl text-gray-400">
                <RiAccountCircleLine />
              </p>
              <p className="text-sm">Baltra Electronics</p>
            </div>

            <button className="text-blue-600 text-sm underline">View</button>
          </div>
        </Link>
        <div className="bg-gray-300 h-[1px]"></div>
        <div className="flex justify-end">
          <button className="text-blue-600 text-sm mt-2">See More</button>
        </div>
      </div>

      <div className="mt-6 mr-6">
        <button className="bg-[#097D0D] w-28 mt-5 text-sm text-white px-3 py-[6px] rounded">
          Bills
        </button>
        <div className="flex items-center justify-between mt-6 mb-3">
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <p className="text-3xl text-gray-400">
              <RiAccountCircleLine />
            </p>
            <p className="flex flex-col text-xs">
              5 days ago
              <span>18th Feb 2023</span>
            </p>
          </div>

          <button className="text-blue-600 text-sm underline">View</button>
        </div>
        <div className="bg-gray-300 h-[1px]"></div>
        <div className="flex justify-end">
          <button className="text-blue-600 text-sm mt-2">See More</button>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
