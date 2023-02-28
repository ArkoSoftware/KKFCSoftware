import React from "react";
import { BsThreeDots } from "react-icons/bs";

const EditInfo = () => {
  return (
    <section className="pl-[15px] lg:pl-[36px] pt-[24px] pr-[15px]">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl mb-10 md:m-0">Edit Information</h2>
        <div className="flex items-center gap-5">
          <button className="py-2 px-2 text-sm bg-[#CCCCCC] rounded">
            <BsThreeDots />
          </button>
        </div>
      </div>

      <form className="mt-12 grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start">
        <div className="md:w-96">
          <p className="mb-7">Personal Information</p>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-sm w-full mb-7"
          />
          <div className="grid grid-cols-2 gap-5 mb-7">
            <div>
              <label htmlFor="dateOfBirth" className="block mb-2 text-sm">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="input input-bordered input-sm w-full"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="input input-bordered input-sm w-full"
              >
                <option value="female">female</option>
                <option value="Male">Male</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-7">
            <div>
              <label htmlFor="dateOfJoining" className="block text-sm mb-2">
                Date of Joining
              </label>
              <input
                type="date"
                name="dateOfJoining"
                id="dateOfJoining"
                className="input input-bordered input-sm w-full"
              />
            </div>
            <div>
              <label htmlFor="salary" className="block text-sm mb-2">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                className="input input-bordered input-sm w-full"
              />
            </div>
          </div>
          <label htmlFor="mobileNumber" className="block text-sm mb-2">
            Employee mobile number
          </label>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            className="input input-bordered input-sm w-full mb-7"
          />
          <label htmlFor="location" className="block text-sm mb-2">
            Employee Location
          </label>
          <select
            name="location"
            id="location"
            className="input input-bordered input-sm w-full"
          >
            <option value="Civil Mall, Kathmandu">Civil Mall, Kathmandu</option>
            <option value="Civil Mall, Kathmandu">Civil Mall, Kathmandu</option>
            <option value="Civil Mall, Kathmandu">Civil Mall, Kathmandu</option>
          </select>
        </div>

        <div className="w-full md:w-96 mt-10 lg:mt-0 mb-10 lg:mb-0">
          <p className="mb-7">Bank Details</p>
          <label htmlFor="bankName" className="block text-sm mb-2">
            Bank Name
          </label>
          <select
            name="bankName"
            id="bankName"
            className="input input-bordered input-sm w-full mb-7"
          >
            <option value="Nic Asia">Nic Asia</option>
            <option value="Nic Asia">Nic Asia</option>
            <option value="Nic Asia">Nic Asia</option>
          </select>
          <label htmlFor="accountNumber" className="block text-sm mb-2">
            Account Number
          </label>
          <input
            type="text"
            name="accountNumber"
            id="accountNumber"
            className="input input-bordered input-sm w-full"
          />
          <button className="bg-[#097D0D] mt-10 w-full py-2 rounded text-white">
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditInfo;
