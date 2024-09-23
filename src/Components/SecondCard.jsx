import React from "react";

function SecondCard() {
  return (
    <>
      <div className="card" id="2">
        <div className="bg-background rounded-lg">
          <div className="mb-4">
            <label htmlFor="vat-number" className="block text-muted-foreground">
              VAT
            </label>
            <input
              type="text"
              id="vat-number"
              placeholder="VAT number"
              className="border border-border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="industry" className="block text-muted-foreground">
              Industry
            </label>
            <select
              id="industry"
              className="border border-border rounded-lg p-2 w-full"
            >
              <option>Please select your industry...</option>
              <option>Industry 1</option>
              <option>Industry 2</option>
              <option>Industry 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-muted-foreground">
              Organization website
            </label>
            <input
              type="url"
              id="website"
              placeholder="www.example.com"
              className="border border-border rounded-lg p-2 w-full"
            />
          </div>
          <button
            className="bg-primary text-primary-foreground hover:bg-primary/80 w-full p-2 rounded-lg text-white"
            onClick={() => {
              localStorage.setItem("num", 2);
              location.reload();
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </>
  );
}

export default SecondCard;
