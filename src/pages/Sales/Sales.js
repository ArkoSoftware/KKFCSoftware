import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import SalesTable from "./SalesTable";
import {
  addNewInvoice,
  getItemList,
  getVendorName,
} from "../../function/Sales";

const Sales = () => {
  const [itemData, setItemData] = useState([]);
  const [invoiceDate, setInvoiceDate] = useState();
  const [isModalOn, setIsModalOn] = useState(false);
  const [vendorName, setVendorName] = useState([]);
  const [tableData, setTableData] = useState([
    { name: "", quantity: 0, price: 0, total: 0 },
  ]);
  const [customer, setCustomer] = useState("");
  const [vat, setVat] = useState(13);
  const getAllData = async () => {
    const response = await getItemList();
    const response1 = await getVendorName();
    setVendorName(response1);
    setItemData(response);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <section className={"pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px] pb-10"}>
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">Sales</h2>
        <div className="flex items-center">
          <input type="date" className="input input-bordered" />
          <div className="border w-[18px] h-0 mx-4"></div>
          <input type="date" className="input input-bordered" />
        </div>
      </div>

      <button
        onClick={() => setIsModalOn(!isModalOn)}
        className="bg-[#097D0D] mt-5 text-sm text-white px-3 py-[6px] rounded"
      >
        Create Invoice
      </button>

      {isModalOn && (
        <div className="bg-[#EAEAEA] mt-3 p-8 rounded-2xl ">
          <div className="flex justify-between items-center">
            <h3 className="text-lg">Create Invoice</h3>
            <div>
              <button
                onClick={async () => {
                  const response = await addNewInvoice({
                    tableData,
                    customer,
                    invoiceDate,
                  });
                  if (response) {
                    setIsModalOn(false);
                    setTableData([
                      { name: "", quantity: 0, price: 0, total: 0 },
                    ]);
                  }
                }}
                className="bg-[#097D0D] text-sm text-white px-3 py-[6px] rounded"
              >
                Add Invoice
              </button>
              <button
                className="ml-12"
                onClick={() => setIsModalOn(!isModalOn)}
              >
                <FaTimesCircle />
              </button>
            </div>
          </div>

          <div className="mt-8 mb-6">
            <label htmlFor="customerName" className="text-sm">
              Customer Name
            </label>
            <div className="flex gap-5 mt-1">
              <select
                onChange={(e) => {
                  if (e.target.value != "" || e.target.value == null) {
                    setCustomer(e.target.value);
                  }
                }}
                className="input input-bordered w-[75%]"
              >
                <option value={""}></option>
                {vendorName.map((item, index) => (
                  <option key={index} value={item}>
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                type="date"
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="input input-bordered w-[25%]"
              />
            </div>
          </div>

          <SalesTable
            itemList={itemData}
            vat={vat}
            tableData={tableData}
            setTableData={setTableData}
          />
        </div>
      )}
    </section>
  );
};

export default Sales;
