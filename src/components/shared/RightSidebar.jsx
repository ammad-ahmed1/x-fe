import React from "react";

const RightSidebar = ({ children }) => {
  return (
    <div className="p-2 fixed border-l border-gray-500 h-screen">
      {children}
    </div>
  );
};

export default RightSidebar;
