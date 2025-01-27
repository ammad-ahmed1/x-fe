import React from "react";
import { sidebarMenu } from "../../data/ui-data";
import LogoIcon from "../../assets/icons/LogoIcon";
import ButtonUI from "../ui/ButtonUI";

const Sidebar = () => {
  console.log(sidebarMenu, "....................sI");
  return (
    <div className="w-[300px] border-r border-gray-500 h-screen">
      <div className="flex flex-col ">
        <div className="mt-6 ml-[40px]">
          <LogoIcon />
        </div>
        {sidebarMenu?.map((item, index) => (
          <div
            key={index}
            className="my-4 px-2 py-2 flex gap-4 ml-[40px] bg-red-500 w-[200px]">
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
        <div className="ml-[40px]">
          <ButtonUI label={"Post"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
