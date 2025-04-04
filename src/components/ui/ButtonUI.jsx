import React from "react";

const ButtonUI = ({
  label,
  handleClick,
  size = "medium",
  bgColor = "black",
  textColor = "white",
}) => {
  // Define base styles
  const baseStyles =
    "font-bold rounded-full transition duration-200 cursor-pointer";

  // Define size-specific styles
  const sizeStyles = {
    small: "px-4 py-1 text-sm",
    medium: "px-8 py-2 text-base",
    large: "px-20 py-2 text-lg",
  };

  // Combine base styles with size-specific styles and dynamic colors
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} bg-${bgColor} text-${textColor} hover:bg-${bgColor}-100`;

  return (
    <div>
      <button className={buttonStyles} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default ButtonUI;
