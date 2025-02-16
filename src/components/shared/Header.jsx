// components/Header.js
import React from "react";

const Header = ({ children }) => {
  return (
    <>
      {/* Header for medium and large screens */}
      <header className=" shadow-md  border-b border-gray-800 py-8">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          {children}
        </div>
      </header>
      {/* Header for small screens (Bottom Navigation)
      <nav className="fixed bottom-0 w-full bg-gray-800 p-2 flex justify-around md:hidden">
        {children}
      </nav> */}
    </>
  );
};

export default Header;
