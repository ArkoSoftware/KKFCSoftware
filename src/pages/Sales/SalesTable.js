import React, { useState } from "react";

const SalesTable = ({ tableData, setTableData, vat, itemList }) => {
  const [total, setTotal] = useState(0);
  const changeData = (val, index, location) => {
    const temp = tableData;
    temp[index][location] = val;
    temp[index]["total"] =
      parseFloat(temp[index]["quantity"]) * parseFloat(temp[index]["price"]);
    setTableData([...temp]);
    let t = 0;
    for (var i = 0; i < temp.length; i++) {
      t = t + temp[i]["total"];
    }
    setTableData(temp);

    setTotal(t);
  };
  const addNewRow = () => {
    const newRow = { name: "", quantity: 0, price: 0, total: 0 };
    setTableData([...tableData, newRow]);
  };
  return (
    <div>
      <h4 className="text-base mb-2">Sales Table</h4>
      <div className="overflow-x-auto">
        <table className="table-normal w-full">
          <thead className="bg-[#AAAAAA] ">
            <tr>
              <th className="font-normal text-sm p-2">S.N.</th>
              <th className="font-normal text-sm p-2">Item Name</th>
              <th className="font-normal text-sm p-2">Price</th>
              <th className="font-normal text-sm p-2">Quantity</th>
              <th className="font-normal text-sm p-2">Total</th>
            </tr>
          </thead>
          <tbody className="bg-[#DCDCDC] ">
            {tableData.map((docs, index) => {
              return (
                <tr className=" border-b border-gray-400">
                  <th className="font-normal text-sm">{index + 1}</th>
                  <td className="p-2 text-center text-sm">
                    <select
                      onChange={(e) => {
                        if (e.target.value != "" || e.target.value == null) {
                          changeData(e.target.value, index, "name");
                        }
                      }}
                      className="outline-none bg-transparent border-b p-2  border-gray-500"
                    >
                      <option value={""}></option>
                      {itemList.map((item, index) => (
                        <option key={index} value={item}>
                          {item.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2 text-center text-sm">
                    <input
                      className="outline-none bg-transparent border-b p-2  border-gray-500 "
                      type="number"
                      onChange={(e) => {
                        changeData(e.target.value, index, "price");
                      }}
                    />
                  </td>
                  <td className="p-2 text-center text-sm">
                    <input
                      className="outline-none bg-transparent border-b p-2  border-gray-500 "
                      type="number"
                      onChange={(e) => {
                        changeData(e.target.value, index, "quantity");
                      }}
                    />
                  </td>
                  <td className="p-2 text-center text-sm">
                    {parseFloat(tableData[index]["total"])
                      ? parseFloat(tableData[index]["total"])
                      : 0}
                  </td>
                </tr>
              );
            })}

            <tr>
              <th></th>
              <td className="p-2 text-center text-sm"></td>
              <td className="p-2 text-center text-sm"></td>
              <td className="p-2 text-center text-sm">VAT</td>
              <td className="p-2 text-center text-sm">
                Rs. {(vat / 100) * total}
              </td>
            </tr>
            <tr>
              <th></th>
              <td className="p-2 pb-5 text-center text-sm"></td>
              <td className="p-2 pb-5 text-center text-sm"></td>
              <td className="p-2 pb-5 text-center text-sm">Total</td>
              <td className="p-2 pb-5 text-center text-sm">
                Rs. {total - (vat / 100) * total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => addNewRow()}
        className="text-[#0F4A00] text-sm mt-4 hover:underline"
      >
        Add New Row
      </button>
    </div>
  );
};

export default SalesTable;
