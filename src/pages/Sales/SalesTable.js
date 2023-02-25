import React from "react";

const SalesTable = () => {
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
            <tr>
              <th className="font-normal text-sm">1</th>
              <td className="p-2 text-center text-sm">Cy Ganderton</td>
              <td className="p-2 text-center text-sm">50</td>
              <td className="p-2 text-center text-sm">2</td>
              <td className="p-2 text-center text-sm">RS. 120</td>
            </tr> 
            <tr>
              <th className="font-normal text-sm">2</th>
              <td className="p-2 text-center text-sm">Cy Ganderton</td>
              <td className="p-2 text-center text-sm">50</td>
              <td className="p-2 text-center text-sm">2</td>
              <td className="p-2 text-center text-sm">RS. 120</td>
            </tr> 
            <tr>
              <th className="font-normal text-sm">3</th>
              <td className="p-2 text-center text-sm">Cy Ganderton</td>
              <td className="p-2 text-center text-sm">50</td>
              <td className="p-2 text-center text-sm">2</td>
              <td className="p-2 text-center text-sm">RS. 120</td>
            </tr> 
            <tr>
              <th></th>
              <td className="p-2 text-center text-sm"></td>
              <td className="p-2 text-center text-sm"></td>
              <td className="p-2 text-center text-sm">VAT</td>
              <td className="p-2 text-center text-sm"></td>
            </tr> 
            <tr>
              <th></th>
              <td className="p-2 pb-5 text-center text-sm"></td>
              <td className="p-2 pb-5 text-center text-sm"></td>
              <td className="p-2 pb-5 text-center text-sm">Total</td>
              <td className="p-2 pb-5 text-center text-sm">Rs. 120</td>
            </tr> 
          </tbody>
        </table>
      </div>
      <button className="text-[#0F4A00] text-sm mt-4 hover:underline">Add New Row</button>
    </div>
  );
};

export default SalesTable;
