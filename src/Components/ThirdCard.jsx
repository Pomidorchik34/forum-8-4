import React from "react";

function ThirdCard() {
  return (
    <>
      <div className="card" id="3">
        <div className="bg-background">
          <label
            className="block text-muted-foreground mb-2"
            htmlFor="currency"
          >
            Currency
          </label>
          <select
            id="currency"
            className="block w-full p-2 border border-border rounded-lg bg-input text-foreground"
          >
            <option>Select your currency...</option>
          </select>
        </div>
        <label
          className="block text-muted-foreground mt-4 mb-2"
          htmlFor="country"
        >
          Country of bank account
        </label>
        <select
          id="country"
          className="block w-full p-2 border border-border rounded-lg bg-input text-foreground"
        >
          <option>Country</option>
        </select>
        <label className="block text-muted-foreground mt-4 mb-2" htmlFor="iban">
          IBAN
        </label>
        <input
          type="text"
          id="iban"
          placeholder="Enter your IBAN"
          className="block w-full p-2 border border-border rounded-lg bg-input text-foreground"
        />
        <label
          className="block text-muted-foreground mt-4 mb-2"
          htmlFor="confirm-iban"
        >
          Confirm IBAN
        </label>
        <input
          type="text"
          id="confirm-iban"
          placeholder="Confirm IBAN"
          className="block w-full p-2 border border-border rounded-lg bg-input text-foreground"
        />
        <button
          className="mt-6 bg-primary text-white btn-primary p-2 rounded-lg w-full"
          onClick={() => {
            localStorage.setItem("num", 3);
            location.reload();
          }}
        >
          Continue →
        </button>
      </div>
    </>
  );
}

export default ThirdCard;
