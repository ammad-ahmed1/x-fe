import React, { useEffect, useMemo, useRef, useState } from "react";
import TextFieldUI from "./TextFieldUI";

const SelectUI = ({ data, value, setValue, label, size, disabled, error }) => {
  const sizeStyles = {
    xs: { width: "100%", height: "300px" },
    sm: { width: "200px", height: "300px" }, // Small size
    md: { width: "300px", height: "300px" }, // Medium (default)
    lg: { width: "400px", height: "300px" }, // Large size
  };
  const [selectItem, setSelectItem] = useState({});
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const renderItems = (item) => {
    return (
      <div
        className="cursor-pointer"
        onMouseDown={(e) => {
          e.stopPropagation();
          // setSelectItem(item);
          setValue(item);
        }}>
        {item.label}
      </div>
    ); // not selecting the item
  };

  const handleShowDropdown = () => {
    if (!disabled) setIsShowDropdown(true);
  };
  const handleBlur = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setIsShowDropdown(false);
    }
  };
  useEffect(() => {
    setValue(selectItem);
  }, [selectItem]);
  return (
    <div
      className="relative border-white-900"
      onFocusCapture={() => handleShowDropdown()}
      onBlurCapture={handleBlur}>
      <TextFieldUI
        fieldState={value?.label || value}
        label={label}
        fullWidth
        size={size}
        disabled={disabled}
        className={"border-none outline-none"}
        errorMsg={error}
        isHideErrMsg={true}
      />

      <div
        ref={dropdownRef}
        className={`absolute z-50 h-[250px] w-full w-${size} overflow-hidden rounded-lg bg-black border border-[rgb(51,54,57)] shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-y-auto ${
          !isShowDropdown && "hidden"
        }`}>
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
