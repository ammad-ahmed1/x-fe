import React, { useRef, useState, useEffect } from "react";

const TabsUI = ({ tab, isActive, onClick }) => {
  const labelRef = useRef(null); // Ref to track the width of the tab's label
  const [indicatorWidth, setIndicatorWidth] = useState(0); // State to store the width of the label

  // Update the indicator width when the tab becomes active
  useEffect(() => {
    if (isActive && labelRef.current) {
      setIndicatorWidth(labelRef.current.offsetWidth);
    }
  }, [isActive]);

  return (
    <div
      className="w-full px-6 py-4 flex flex-col justify-center items-center hover:bg-[rgba(255,255,255,0.1)] transition duration-200 cursor-pointer relative"
      onClick={onClick}>
      <span
        ref={labelRef}
        className={`text-center ${
          isActive ? "text-white font-bold" : "text-gray-500"
        }`}>
        {tab?.name}
      </span>
      {isActive && (
        <div
          className="absolute bottom-0 h-1 bg-blue-500 rounded-full"
          style={{ width: `${indicatorWidth}px` }} // Set the width dynamically
        ></div>
      )}
    </div>
  );
};

export default TabsUI;
