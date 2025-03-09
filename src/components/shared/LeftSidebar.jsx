import React from "react";
import { sidebarMenu } from "../../data/ui-data";
import LogoIcon from "../../assets/icons/LogoIcon";
import ButtonUI from "../ui/ButtonUI";

// Reusable Menu Item Component
const MenuItem = ({ item }) => (
  <li className="flex gap-4 hover:bg-gray-600 p-3 rounded-3xl cursor-pointer my-2 hover:bg-gray-200 dark:hover:bg-gray-700">
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
        className="lg:w-80 md:w-24 border-r border-gray-800 h-screen fixed">
        <div className="flex flex-col h-full justify-between lg:px-4 md:px-2">
          {/* Logo */}
          <div className="mt-4 lg:pl-6 md:pl-2">
            <LogoIcon aria-label="App Logo" className="w-8 h-8" />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col space-y-2 lg:pl-4 md:pl-2">
            {sidebarMenu?.map((item) => (
              <MenuItem key={item.id || item.name} item={item} />
            ))}
          </ul>

          {/* Post Button */}
          <div className="lg:px-4 md:px-2 mb-6">
            <ButtonUI
              label="Post"
              size="large"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full py-3"
            />
          </div>
        </div>
      </nav>
      {/* Mobile Bottom Bar */}
    </>
  );
};

export default React.memo(LeftSidebar);
