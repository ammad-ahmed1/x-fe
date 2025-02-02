import React from "react";
import { sidebarMenu } from "../../data/ui-data";

const MobileBottomBar = () => {
  return (
    <nav
      aria-label="Mobile navigation"
      className=" bg-blue-500 text-white p-4 shadow-lg flex justify-around md:hidden">
      {sidebarMenu?.map((item) => (
        <div
          key={item.id || item.name}
          className="flex items-center justify-center p-2 rounded-full hover:bg-blue-600 cursor-pointer"
          aria-label={item.name}>
          {item.icon}
        </div>
      ))}
    </nav>
  );
};

export default MobileBottomBar;
