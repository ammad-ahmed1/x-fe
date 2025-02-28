import React from "react";
import { sidebarMenu } from "../../data/ui-data";
import LogoIcon from "../../assets/icons/LogoIcon";
import ButtonUI from "../ui/ButtonUI";

// Reusable Menu Item Component
const MenuItem = ({ item }) => (
  <li className="flex gap-4 hover:bg-gray-100 p-3 rounded-3xl cursor-pointer my-2">
    <div aria-hidden="true">{item.icon}</div>
    <p className="text-xl font-medium md:hidden lg:block">{item.name}</p>
  </li>
);

const LeftSidebar = () => {
  return (
    <>
      {/* Desktop and Medium Screen Sidebar */}
      <nav
        aria-label="Main navigation"
        className="lg:w-80 md:w-24 border-r border-gray-500 h-screen md:block hidden fixed">
        <div className="flex flex-col items-start lg:mx-14 md:mx-7 justify-around gap-4">
          <div className="mt-4 mx-2">
            <LogoIcon aria-label="App Logo" />
          </div>
          <ul className="w-full">
            {sidebarMenu?.map((item) => (
              <MenuItem key={item.id || item.name} item={item} />
            ))}
          </ul>
          <div className="w-full">
            <ButtonUI label="Post" size="large" />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
    </>
  );
};

export default React.memo(LeftSidebar);
