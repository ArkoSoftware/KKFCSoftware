import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Inventory = () => {
  const [sourceStore, SetSourceStore] = useState("");
  const [destinationStore, SetDestinationStore] = useState("");
  return (
    <section className="pl-[15px] lg:pl-[46px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-3xl mb-10 md:m-0">Inventory</h2>
        <div className="flex items-center gap-3">
          <button className="py-1 px-3 rounded text-white bg-[#097D0D]">
            New Bill
          </button>
          <button className="py-1 px-3 rounded text-white bg-[#097D0D]">
            Stock Management
          </button>
          <button className="py-2 px-2 bg-[#CCCCCC] rounded">
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-16">
        <div>
          <select
            onChange={(e) => SetSourceStore(e.target.value)}
            name=""
            id=""
            className={`w-full border-b-2 pb-1 ${
              sourceStore ? "text-black" : "text-red-500 border-red-500"
            }`}
          >
            <option selected disabled>
              Source store
            </option>
            <option value="Source store">Source store</option>
            <option value="Source store">Source store</option>
          </select>
          <label
            htmlFor=""
            className={`block text-xs text-red-500 mb-10 mt-1 ${
              sourceStore && "opacity-0"
            }`}
          >
            Select a store
          </label>

          <label htmlFor="" className="text-sm text-[#9B9B9B]">
            Date of Transfer Order
          </label>
          <input
            type="date"
            name=""
            id=""
            className="w-full input input-bordered rounded-3xl mt-2"
          />
        </div>
        <div>
          <select
            name=""
            id=""
            className={`w-full border-b-2 pb-1 ${
              destinationStore ? "text-black" : "text-red-500 border-red-500"
            }`}
            onChange={(e) => SetDestinationStore(e.target.value)}
          >
            <option selected disabled>
              Destination store
            </option>
            <option value="Destination store">Destination store 1</option>
            <option value="Destination store">Destination store 2</option>
          </select>
          <label
            htmlFor=""
            className={`block text-xs text-red-500 mb-10 mt-1 ${
              destinationStore && "opacity-0"
            }`}
          >
            Select a store
          </label>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
