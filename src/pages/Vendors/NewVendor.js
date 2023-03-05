import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { addNewVendor } from "../../function/NewVendor";

const NewVendor = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [vendorLocation, setVendorLocation] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [tax, setTax] = useState("");
  const [email, setEmail] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await addNewVendor({
      name,
      mobile,
      vendorLocation,
      bankName,
      accountNumber,
      tax,
      email,
    });
    if (response) {
      alert("Vendor Sucessfully added");
      setName("");
      setMobile("");
      setVendorLocation("");
      setBankName("");
      setAccountNumber("");
      setTax("");
    }
  }
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">New Vendor</h2>
        <div className="flex items-center gap-5">
          <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
            <BsThreeDots />
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-12 grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start"
      >
        <div className="w-full md:w-96">
          <p className="mb-3">Personal Information</p>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <input
            required
            value={name}
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="block text-sm mb-2">
            Email Address
          </label>
          <input
            value={email}
            type="text"
            name="email"
            id="email"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="tax" className="block text-sm mb-2">
            Tax Number
          </label>
          <input
            required
            value={tax}
            type="text"
            name="tax"
            id="tax"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setTax(e.target.value)}
          />

          <label htmlFor="mobileNumber" className="block text-sm mb-2">
            Vendor mobile number
          </label>
          <input
            value={mobile}
            required
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setMobile(e.target.value)}
          />
          <label htmlFor="vendorLocation" className="block text-sm mb-2">
            Vendor Location
          </label>
          <input
            required
            value={vendorLocation}
            type="text"
            name="vendorLocation"
            id="vendorLocation"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setVendorLocation(e.target.value)}
          />
        </div>

        <div className="w-full md:w-96 mt-10 lg:mt-0 mb-10 lg:mb-0">
          <p className="mb-3">Bank Details</p>
          <label htmlFor="vendorBank" className="block text-sm mb-2">
            Bank Name
          </label>
          <input
            value={bankName}
            type="text"
            name="vendorBank"
            id="vendorBank"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setBankName(e.target.value)}
          />
          <label htmlFor="accountNumber" className="block text-sm mb-2 py-5">
            Account Number
          </label>
          <input
            value={accountNumber}
            type="text"
            name="accountNumber"
            id="accountNumber"
            className="input input-bordered input-sm w-full mb-3 py-5"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#097D0D] mt-10 w-full py-2 rounded text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewVendor;
