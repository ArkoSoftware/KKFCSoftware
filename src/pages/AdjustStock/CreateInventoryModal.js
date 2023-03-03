import React from "react";

const CreateInventoryModal = () => {
  return (
    <>
      <input
        type="checkbox"
        id="createInventoryModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-96 relative">
          <label
            htmlFor="createInventoryModal"
            className="btn btn-xs btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-normal">Create Inventory</h3>
          <div className="py-4 pt-7 mt-10">
            <p className="text-sm">Add Item</p>
            <input
              type="text"
              className="input input-bordered input-sm w-full mt-8"
              placeholder="Enter Name Of the Product"
            />
            <p className="text-xs text-red-500 mt-1 ml-4">*Enter the name</p>

            <div className="flex gap-4 justify-end mt-20">
              <button className="border-2 text-[#097D0D] border-[#097D0D] text-sm px-4 py-1 rounded font-medium">
                Cancel
              </button>
              <button className="border-2 text-white border-[#097D0D] bg-[#097D0D] text-sm px-4 py-1 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInventoryModal;
