import React from "react";

const ButtonUI = ({
  children,
  label,
  handleClick,
  size = "medium",
  bgColor = "white",
  textColor = "black",
  externalClass,
}) => {
  // Size classes
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-[150px] py-1 text-sm";
      case "medium":
        return "w-[200px] py-2 text-base";
      case "large":
        return "w-[200px] lg:w-[250px] py-2 text-sm lg:text-md";
      case "x-large":
        return "w-[275px] lg:w-[300px] py-2 text-sm lg:text-md font-bold";
      default:
        return "px-8 py-2 text-base";
    }
  };
  // Color classes (predefined Tailwind classes)
  const getColorClasses = () => {
    const colorMap = {
      black: "bg-black text-white hover:bg-gray-800",
      white: "bg-white text-black hover:bg-gray-100",
      blue: "bg-blue-500 text-white hover:bg-blue-600",
      red: "bg-red-500 text-white hover:bg-red-600",
      primary: "bg-[rgb(29,155,240)] text-white hover:bg-[rgb(26,140,216)]",
      transparent:
        "bg-transparent text-red-400 border border-current hover:bg-gray-100 hover:bg-opacity-20",
      "transparent-white":
        "bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10",
      "transparent-black":
        "bg-transparent text-black border border-black hover:bg-black hover:bg-opacity-10",
      "transparent-primary":
        "bg-transparent text-[rgb(29,155,240)] border border-[rgb(29,155,240)] hover:bg-[rgb(29,155,240)] hover:bg-opacity-10",
      // Add more colors as needed
    };
    return colorMap[bgColor] || colorMap.black;
  };

  // Combine base styles with size-specific styles and dynamic colors
  const buttonStyles = `${baseStyles} ${
    sizeStyles[size]
  } bg-${bgColor} text-${textColor} hover:bg-${bgColor}-100 ${
    externalClass && externalClass
  }`;

  return (
    <div>
      <button
        className={`
          font-bold rounded-full transition duration-200 cursor-pointer
          ${getSizeClasses()} 
          ${getColorClasses()}
        `}
        onClick={handleClick}>
        {children || label}
      </button>
    </div>
  );
};

export default ButtonUI;
