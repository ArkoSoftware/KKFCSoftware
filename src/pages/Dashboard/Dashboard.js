import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const dashboard = () => {
  return (
    <section className="pl-[15px] lg:pl-[46px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-3xl mb-10 md:m-0">Dashboard</h2>
        <div className="flex items-center">
          <input type="date" className="input input-bordered" />
          <div className="border w-[18px] h-0 mx-4"></div>
          <input type="date" className="input input-bordered" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[75px] mt-16">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Receivables</p>
            <Link to="/" className="text-blue-500">
              View Report
            </Link>
          </div>
          <p className="mt-[23px]">Total Unpaid Invoices: Rs. 0</p>
          <div className="w-full h-[10px] bg-gray-300 my-6 rounded"></div>
          <div className="flex gap-[53px]">
            <div>
              <p>Open</p>
              <p>Rs. 0.00</p>
            </div>
            <div>
              <p>Overdue</p>
              <p>Rs. 0.00</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Payables</p>
            <Link to="/" className="text-blue-500">
              View Report
            </Link>
          </div>
          <p className="mt-[23px]">Total Unpaid Invoices: Rs. 0</p>
          <div className="w-full h-[10px] bg-gray-300 my-6 rounded"></div>
          <div className="flex gap-[53px]">
            <div>
              <p>Open</p>
              <p>Rs. 0.00</p>
            </div>
            <div>
              <p>Overdue</p>
              <p>Rs. 0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-x-scroll">
        <Chart />
      </div>
    </section>
  );
};

export default dashboard;
