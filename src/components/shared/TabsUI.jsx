import React from "react";

const TabsUI = ({ tab }) => {
  console.log(tab);
  return (
    <div className="flex">
      <div className="px-6 py-2">{tab?.name}</div>
    </div>
  );
};

export default TabsUI;
