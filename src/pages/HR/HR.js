import React from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";

const HR = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">HR</h2>
        <div className="flex items-center gap-3">
          <button className="py-1 px-5 rounded text-sm text-white bg-[#097D0D]">
            Payroll
          </button>
          <button className="py-1 px-7 rounded text-sm text-white bg-[#097D0D]">
            Add Employee
          </button>
          <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-7">
        <p className="text-xs">
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
            className="input input-sm input-bordered w-[280px] pl-8"
            placeholder="Search employee"
          />
        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
};

export default HR;
