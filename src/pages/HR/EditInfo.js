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

      <form className="mt-12 grid grid-cols-2">
        <div>
          <p>Personal Information</p>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-sm w-full"
          />
          <div>
            <div>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" name="dateOfBirth" id="dateOfBirth" />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender">
                <option value="female">female</option>
                <option value="Male">Male</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="dateOfJoining">Date of Joining</label>
              <input type="date" name="dateOfJoining" id="dateOfJoining" />
            </div>
            <div>
              <label htmlFor="salary">Salary</label>
              <input type="text" name="salary" id="salary" />
            </div>
          </div>
          <label htmlFor="mobileNumber">Employee mobile number</label>
          <input type="text" name="mobileNumber" id="mobileNumber" />
          <label htmlFor="location">Employee Location</label>
          <select name="location" id="location">
            <option value="Civil Mall, Kathmandu">Civil Mall, Kathmandu</option>
            <option value="Civil Mall, Kathmandu">Civil Mall, Kathmandu</option>
            <option value="Civil Mall, Kathmandu">Civil Mall, Kathmandu</option>
          </select>
        </div>
        <div>
          <p>Bank Details</p>
          <label htmlFor="bankName">Bank Name</label>
          <select name="bankName" id="bankName">
            <option value="Nic Asia">Nic Asia</option>
            <option value="Nic Asia">Nic Asia</option>
            <option value="Nic Asia">Nic Asia</option>
          </select>
          <label htmlFor="accountNumber">Account Number</label>
          <input type="text" name="accountNumber" id="accountNumber" />
          <button className="bg-[#097D0D]">Save Changes</button>
        </div>
      </form>
    </section>
  );
};

export default EditInfo;
