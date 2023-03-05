import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiStar, HiUser, HiMenuAlt1, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import SelectVendor from "./SelectVendor";
import { getVendorList } from "../../function/vendor";
import { getItemList } from "../../function/Sales";

const NewBill = () => {
  const [name, setName] = useState("");
  const [itemData, setItemData] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const getAllData = async () => {
    const response = await getVendorList();
    const response1 = await getItemList();
    setVendorList(response);
    setItemData(response1);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <SelectVendor vendorList={vendorList} name={name} setName={setName} />
      <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[36px] pb-20">
        <div className="md:flex justify-between items-center">
          <h2 className="text-xl mb-10 md:m-0">
            Bills <HiStar className="inline text-xs" />
          </h2>
          <div className="flex items-center gap-3">
            <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
              <BsThreeDots />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-9">
          <label
            htmlFor="createInventoryModal"
            className="border bg-gray-300 rounded-[15px] py-10 px-16"
          >
            <p className="flex items-center justify-center text-3xl">
              <HiUser />
            </p>
            {name == "" ? <p>Add a vendor</p> : <p>{name}</p>}
          </label>
          <div className="grid grid-cols-2 gap-5 w-[72%]">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="">
                Bill Date
              </label>
              <input className="input input-bordered" type="date" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="">
                Bill Number
              </label>
              <input className="input input-bordered" type="text" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm" htmlFor="">
                Order Number
              </label>
              <input className="input input-bordered" type="text" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto w-full mt-16">
          <table className="table-normal w-full">
            <thead>
              <tr className="border-b">
                <th className="font-normal text-sm"></th>
                <th className="font-normal text-sm">
                  <span className="block text-left text-xs">Items</span>
                </th>
                <th className="font-normal text-sm">
                  <span className="block text-left text-xs">Description</span>
                </th>
                <th className="font-normal text-sm">
                  <span className="block text-left text-xs">Quantity</span>
                </th>
                <th className="font-normal text-sm">
                  <span className="block text-left text-xs">Price</span>
                </th>
                <th className="font-normal text-sm">
                  <span className="block text-left text-xs">Amount</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>
                  <span className="block text-left text-md">
                    <HiMenuAlt1 />
                  </span>
                </td>
                <td>
                  <span className="block text-left text-xs">BROWN SUGAR</span>
                </td>
                <td>
                  <input
                    type="text"
                    className="input input-bordered input-sm"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input input-bordered input-sm"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input input-bordered input-sm"
                  />
                </td>
                <td>
                  <span className="block text-left text-xs">Rs.400</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-b p-1">
          <p className="flex items-center justify-center text-blue-600 text-sm">
            <HiPlusSm className="inline-block text-xl" /> Add an item
          </p>
        </div>

        <div className="flex justify-end gap-16 mt-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm">Add Discount</p>
            <div className="flex items-center gap-3 text-sm">
              <p>Total</p>
              <select
                name=""
                id=""
                className="input input-bordered input-sm text-sm"
              >
                <option value="">Nepalese Rupees</option>
                <option value="">Nepalese Rupees</option>
                <option value="">Nepalese Rupees</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p>Rs.400</p>
            <p>Rs.400</p>
            <p>Rs.400</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewBill;
