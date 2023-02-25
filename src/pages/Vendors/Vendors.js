import React from "react";

const Vendors = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">Vendors</h2>
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
        <div className="flex border px-7 py-2 flex-col items-center">
          <h3 className="text-3xl text-[#2825CB]">Rs.20K</h3>
          <div className="bg-gray-400 h-[1px] w-10 mt-3 mb-1"></div>
          <p className="text-sm text-gray-500">Open</p>
        </div>
        <div className="flex border px-7 py-2 flex-col items-center">
          <h3 className="text-3xl text-[#2825CB]">Rs.0K</h3>
          <div className="bg-gray-400 h-[1px] w-10 mt-3 mb-1"></div>
          <p className="text-sm text-gray-500">Draft</p>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
