import React from "react";

const DeleteModal = () => {
  return (
    <>
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96 py-16">
          <h3 className=" text-xl text-center">Are you sure?</h3>

          <div className="modal-action flex gap-5 justify-center mt-14">
            <button className="border-2 border-[#097D0D] rounded text-white bg-[#097D0D] px-2">
              Delete
            </button>
            <label
              htmlFor="deleteModal"
              className="border-2 border-[#097D0D] rounded px-2 cursor-pointer text-[#097D0D] font-medium"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
