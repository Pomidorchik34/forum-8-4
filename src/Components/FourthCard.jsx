import React from "react";

function FourthCard() {
  return (
    <>
      <div className="card" id="4">
        <h6>Keep your account secure</h6>
        <button className="mt-4 text-start py-[9px] px-[16px] block w-full p-2 border border-border rounded-lg bg-input text-foreground mb-4">
          Use SMS
        </button>
        <button className="text-start py-[9px] px-[16px] block w-full p-2 border border-border rounded-lg bg-input text-foreground">
          Use an authenticator app
        </button>
        <button className="mt-6 bg-primary text-white btn-primary p-2 rounded-lg w-full">
          Continue →
        </button>
      </div>
    </>
  );
}

export default FourthCard;
