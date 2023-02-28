import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import CreateInventoryModal from "./CreateInventoryModal";

const AdjustStock = () => {
  const [sourceStore, SetSourceStore] = useState("");
  const [destinationStore, SetDestinationStore] = useState("");
  return (
    <>
      <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
        <div className="md:flex justify-between items-center">
          <h2 className="text-xl mb-10 md:m-0">Adjust Stock</h2>
          <div className="flex items-center gap-3">
            <label
              htmlFor="createInventoryModal"
              className="py-1 px-3 rounded text-sm text-white bg-[#097D0D]"
            >
              Create Inventory
            </label>
            <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
              <BsThreeDots />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-16">
          <div>
            <label
              htmlFor=""
              className={`block text-base text-red-500 ${
                sourceStore && "  text-green-600"
              }`}
            >
              Reason
            </label>
            <select
              onChange={(e) => SetSourceStore(e.target.value)}
              name=""
              id=""
              className={`w-full border-b-2 pb-1 mb-10 mt-1 text-xs outline-none ${
                sourceStore
                  ? "text-black border-green-600"
                  : "text-red-500 border-red-500"
              }`}
            >
              <option selected disabled>
                Source store
              </option>
              <option value="Source store">Source store</option>
              <option value="Source store">Source store</option>
            </select>

            <label htmlFor="" className="text-sm text-[#9B9B9B]">
              Date of Transfer Order
            </label>
            <input
              type="date"
              name=""
              id=""
              className="w-full input input-sm input-bordered rounded-3xl mt-2"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className={`block text-base text-red-500 ${
                destinationStore && "text-green-600"
              }`}
            >
              Store
            </label>
            <select
              name=""
              id=""
              className={`w-full border-b-2 pb-1 mb-10 mt-1 text-xs outline-none ${
                destinationStore
                  ? "text-black border-green-600"
                  : "text-red-500 border-red-500"
              }`}
              onChange={(e) => SetDestinationStore(e.target.value)}
            >
              <option selected disabled>
                Destination store
              </option>
              <option value="Destination store">Destination store 1</option>
              <option value="Destination store">Destination store 2</option>
            </select>
          </div>
        </div>

        <h3 className="text-left text-xl font-bold mt-5">Items</h3>

        <div className="flex flex-row gap-3 justify-end mt-5">
          <button className="border border-[#097D0D] text-[#097D0D] px-2 rounded">
            Cancel
          </button>
          <button className="bg-[#097D0D] text-white border border-[#097D0D] px-2 rounded">
            Adjust
          </button>
        </div>
      </section>

      <CreateInventoryModal />
    </>
  );
};

export default AdjustStock;
