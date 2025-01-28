import React from "react";
import { sidebarMenu } from "../../data/ui-data";
import LogoIcon from "../../assets/icons/LogoIcon";
import ButtonUI from "../ui/ButtonUI";

const Sidebar = () => {
  console.log(sidebarMenu, "....................sI");
  return (
    <div className="lg:w-80 md:w-24 border-r border-gray-500 h-screen md:block hidden">
      <div className="flex flex-col items-start lg:mx-14 md:mx-7  justify-around gap-4">
        <div className="mt-4">
          <LogoIcon />
        </div>
        {sidebarMenu?.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 hover:bg-gray-100 p-3 rounded-3xl cursor-pointer  ">
            <div>{item.icon}</div>
            <p className="text-xl font-medium md:hidden lg:block">
              {item.name}
            </p>
          </div>
        ))}
        <div className="">
          <ButtonUI label={"Post"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
