import React, { useState } from "react";
import { saveData } from "../../function/AdjustStock";

const CreateInventoryModal = () => {
  const [name, setName] = useState("");
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
        <div className="modal">
          <div className="modal-box w-96 relative">
            <h3 className="text-lg font-normal">Add Item</h3>
            <div className="py-4 pt-7 ">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input input-bordered input-sm w-full p-4 py-5"
                placeholder="Enter Name Of the Product"
              />
              {error ? (
                <p className="text-xs text-red-500 mt-1 ml-4">{errorMessage}</p>
              ) : (
                <></>
              )}

              <div className="flex gap-4 justify-end mt-8">
                <label
                  htmlFor="createInventoryModal"
                  className="border-2 text-[#097D0D] border-[#097D0D] text-sm px-4 py-1 rounded font-medium"
                >
                  Cancel
                </label>

                <button
                  onClick={async () => {
                    setError(false);
                    if (name == "") {
                      setErrorMessage("Field Is Empty");
                      setError(true);
                    } else {
                      const response = await saveData(name);
                      if (response) {
                        setShowModal(false); // Close modal if response is true
                      } else {
                        setErrorMessage("Inventory Already Exists");
                        setError(true);
                      }
                    }
                  }}
                  className="border-2 text-white border-[#097D0D] bg-[#097D0D] text-sm px-4 py-1 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateInventoryModal;
