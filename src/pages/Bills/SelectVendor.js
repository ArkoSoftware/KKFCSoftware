import React, { useState } from "react";
import { saveData } from "../../function/AdjustStock";

const SelectVendor = ({ vendorList, name, setName }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // Add state variable for modal visibility

  return (
    <>
      <input
        type="checkbox"
        id="createInventoryModal"
        className="modal-toggle"
        checked={showModal} // Set checked property to control modal visibility
        onChange={() => setShowModal(!showModal)} // Toggle modal visibility when checkbox is clicked
      />
      {showModal && ( // Only render modal component when showModal state variable is true
        <div className="modal w-full">
          <div className="modal-box w-full relative">
            <h3 className="text-lg font-normal">Choose Vendor</h3>
            <div className="py-4 pt-7 ">
              <select
                value={name}
                onChange={(e) => {
                  if (e.target.value != "" || e.target.value == null) {
                    console.log(e.target.value);
                    setName(e.target.value);
                    setShowModal(false);
                  }
                }}
                className="input input-bordered w-[100%]"
              >
                <option value={""}></option>
                {vendorList.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="flex gap-4 justify-end mt-8">
                <label
                  htmlFor="createInventoryModal"
                  className="border-2 text-[#097D0D] border-[#097D0D] text-sm px-4 py-1 rounded font-medium"
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectVendor;
