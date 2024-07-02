import React from "react";

function AddItems() {
  return (
    <div className="flex justify-end px-3">
      <button
        className=" text-[10px] text-primary-red 
       rounded-lg px-3 py-1 hover:shadow-lg border border-primary-red hover:shadow-primary-red"
      >
        Add items
      </button>
    </div>
  );
}

export default AddItems;
