import React from "react";

const SalesTable = () => {
  return (
    <div>
      <h4 className="text-xl mb-2">Sales Table</h4> 
      <div className="overflow-x-auto">
        <table className="table-normal w-full">
          <thead className="bg-[#AAAAAA] ">
            <tr>
              <th className="font-normal p-2">S.N.</th>
              <th className="font-normal p-2">Item Name</th>
              <th className="font-normal p-2">Price</th>
              <th className="font-normal p-2">Quantity</th>
              <th className="font-normal p-2">Total</th>
            </tr>
          </thead>
          <tbody className="bg-[#DCDCDC] ">
            <tr>
              <th className="font-normal">1</th>
              <td className="p-2 text-center">Cy Ganderton</td>
              <td className="p-2 text-center">50</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">RS. 120</td>
            </tr> 
            <tr>
              <th className="font-normal">2</th>
              <td className="p-2 text-center">Cy Ganderton</td>
              <td className="p-2 text-center">50</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">RS. 120</td>
            </tr> 
            <tr>
              <th className="font-normal">3</th>
              <td className="p-2 text-center">Cy Ganderton</td>
              <td className="p-2 text-center">50</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">RS. 120</td>
            </tr> 
            <tr>
              <th></th>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center">VAT</td>
              <td className="p-2 text-center"></td>
            </tr> 
            <tr>
              <th></th>
              <td className="p-2 pb-5 text-center"></td>
              <td className="p-2 pb-5 text-center"></td>
              <td className="p-2 pb-5 text-center">Total</td>
              <td className="p-2 pb-5 text-center">Rs. 120</td>
            </tr> 
          </tbody>
        </table>
      </div>
      <button className="text-[#0F4A00] mt-4 hover:underline">Add New Row</button>
    </div>
  );
};

export default SalesTable;
