import React from "react";

const CardUI = ({ children, heading }) => {
  return (
    <div className=" border border-[rgb(51,54,57)] rounded-2xl ">
      <h2 className="text-xl font-bold text-white p-4">{heading}</h2>
      {children}
    </div>
  );
};

export default CardUI;
