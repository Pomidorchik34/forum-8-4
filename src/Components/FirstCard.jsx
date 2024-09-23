import React, { useState } from "react";

function FirstCard() {
  function aboutPerson() {
    let person = {};
    localStorage.setItem();
  }
  return (
    <>
      <div className="card" id="1">
        <h2 className="text-lg mb-4">Name</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-2 border border-border rounded mb-4"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-2 border border-border rounded mb-4"
          />
        </div>
        <h2 className="text-lg mb-4">Email</h2>
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-2 border border-border rounded mb-4"
        />
        <h2 className="text-lg mb-4">Address</h2>
        <input
          type="text"
          placeholder="Address line 1"
          className="w-full p-2 border border-border rounded mb-4"
        />
        <input
          type="text"
          placeholder="Address line 2"
          className="w-full p-2 border border-border rounded mb-4"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-2 border border-border rounded mb-4"
        />
        <input
          type="text"
          placeholder="Zip"
          className="w-full p-2 border border-border rounded mb-4"
        />
        <h2 className="text-lg mb-4">Phone</h2>
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2 border border-border rounded mb-4"
        />
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/80 w-full p-2 rounded-lg text-white"
          onClick={() => {
            localStorage.setItem("num", 1);
            location.reload();
          }}
        >
          Continue →
        </button>
      </div>
    </>
  );
}

export default FirstCard;
