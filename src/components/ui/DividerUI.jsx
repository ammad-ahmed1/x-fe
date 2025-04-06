import React from "react";

const DividerUI = ({ content }) => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-gray-600"></div>
      <span className="mx-2 text-gray-500">{content}</span>
      <div className="flex-grow border-t border-gray-600"></div>
    </div>
  );
};

export default DividerUI;
