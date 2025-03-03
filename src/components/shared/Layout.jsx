// components/Layout.js
import React from "react";
import LeftSidebar from "./LeftSidebar";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import MobileBottomBar from "./MobileBottomBar";
import Post from "../ui/Post";
import Homepage from "../../pages/Homepage";
import SignIn from "../../pages/SignIn";
import SearchInputUI from "../ui/SearchInputUI";

// import RightSidebar from "./RightSidebar";
// import Header from "./Header";

const Layout = ({ children, headerContent, rightSidebarContent }) => {
  return (
    <div className="flex min-h-screen ">
      <div className="lg:w-80 md:w-24 border-r border-gray-800 h-screen md:block hidden">
        <LeftSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        {/* Header (Visible on all screens) */}
        <Header>{headerContent}</Header>
        <main className="flex-1 py-2 md:py-4 overflow-y-auto">{children}</main>
      </div>
      <div className="lg:w-80 md:w-64 border-l border-gray-800 h-screen md:block hidden flex justify-center">
        <RightSidebar>
          <SearchInputUI />
        </RightSidebar>
      </div>
      <div className="fixed w-full bottom-0 md:hidden">
        <MobileBottomBar />
      </div>
    </div>
  );
};

export default Layout;
