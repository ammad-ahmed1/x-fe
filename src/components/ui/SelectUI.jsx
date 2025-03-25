import React, { useMemo, useRef, useState } from "react";
import TextFieldUI from "./TextFieldUI";

const SelectUI = ({ data, placeholder, size }) => {
  const sizeStyles = useMemo(
    () => ({
      sm: { width: "200px", height: "300px" }, // Small size
      md: { width: "300px", height: "300px" }, // Medium (default)
      lg: { width: "400px", height: "300px" }, // Large size
    }),
    []
  );
  const [selectItem, setSelectItem] = useState({});
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const renderItems = (item) => {
    return (
      <div
        className="cursor-pointer"
        onMouseDown={(e) => {
          e.stopPropagation();
          console.log(item);
          setSelectItem(item);
        }}
      >
        {item.label}
      </div>
    ); // not selecting the item
  };
  console.log(selectItem);

  const handleShowDropdown = () => {
    setIsShowDropdown(true);
  };
  const handleBlur = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setIsShowDropdown(false);
    }
  };

  return (
    <div onFocusCapture={() => handleShowDropdown()} onBlurCapture={handleBlur}>
      <TextFieldUI
        fieldState={selectItem.label}
        setFieldState={setSelectItem}
        placeholder={placeholder}
        fullWidth
        size={size}
        className={"border-none outline-none"}
      />
      <div
        ref={dropdownRef}
        className={`h-[200px] w-[300px] overflow-hidden rounded-lg bg-black border border-[rgb(51,54,57)] shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-y-auto ${
          !isShowDropdown && "hidden"
        }`}
      >
        {data?.map((item, index) => (
          <React.Fragment key={item.id || index}>
            {renderItems(item)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SelectUI;
