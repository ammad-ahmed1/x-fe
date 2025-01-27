import React from "react";

const ButtonUI = ({ label, handleClick, size }) => {
  return (
    <div>
      <button
        className="bg-white hover:bg-gray-100 text-black font-bold px-24 py-4 rounded-4xl transition duration-200 cursor-pointer"
        onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default ButtonUI;
