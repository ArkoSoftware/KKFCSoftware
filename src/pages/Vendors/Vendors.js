import React, { useEffect, useState } from "react";
import { HiOutlineSearch, HiStar, HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getVendorList } from "../../function/vendor";

const Vendors = () => {
  const [vendorList, setVendorList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const getAllData = async () => {
    const res = await getVendorList();
    setVendorList(res);
    setSearchList(res);
  };
  const getNewData = (text) => {
    if (text == "") {
      setSearchList(vendorList);
      return;
    }
    const filtered = vendorList.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchList([...filtered]);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[36px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">
          Vendors <HiStar className="inline text-xs" />
        </h2>

        <Link to="/purchase/newVendor">
          <button className="bg-[#097D0D] w-28 mt-5 text-sm text-white px-3 py-[6px] rounded">
            Add Vendors
          </button>
        </Link>
      </div>

      <div className="flex justify-center md:justify-between flex-wrap md:mx-10 mt-10">
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
          onChange={(e) => {
            setSearch(e.target.value);
            getNewData(e.target.value);
          }}
        />
      </div>

      <div className="overflow-x-auto w-full mt-5">
        <table className="table-normal w-full">
          <thead>
            <tr className="border-b">
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
            {searchList.map((docs) => (
              <tr className="border-b">
                <td>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl text-gray-400">
                      <HiOutlineUserCircle />
                    </span>
                    <div>
                      <p className="text-xs">{docs.name}</p>
                      <p className="text-xs mt-3">{docs.tax}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="block text-left text-xs">{docs.email}</span>
                  <span className="block text-left text-xs mt-3">
                    {docs.mobile}
                  </span>
                </td>
                <td>
                  <span className="block text-left text-xs">Nepal</span>
                  <span className="block text-left text-xs mt-3">NPR</span>
                </td>
                <td>
                  <span className="block text-left text-xs">N/A</span>
                  <span className="block text-left text-xs">N/A</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Vendors;
