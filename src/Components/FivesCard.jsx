import React from "react";

function FivesCard() {
  return (
    <>
      <div className="card">
        <h3>Business details</h3>
        <input
          type="text"
          placeholder="Missing required business information"
          className="danger-input mt-4 block w-full px-4 py-[17px] border border-spacing-1 border-[#EF4444] rounded-lg bg-[#EF444414] text-foreground"
          disabled
        />
        <button
          disabled
          className="mb-[86px] mt-6 bg-[#4a3aff5c] text-white btn-primary p-2 rounded-lg w-full"
        >
          Submit →
        </button>
      </div>
    </>
  );
}

export default FivesCard;
