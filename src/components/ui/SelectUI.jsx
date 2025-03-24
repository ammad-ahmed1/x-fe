import React, { useRef, useState } from "react";
import TextFieldUI from "./TextFieldUI";

const SelectUI = ({ data }) => {
  const [selectItem, setSelectItem] = useState(null);
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const renderItems = (item) => {
    return <div onClick={() => setSelectItem(item)}>{item}</div>; // not selecting the item
  };
  console.log(selectItem);

  const handleShowDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };
  const handleSelect = () => {
    console.log("select");
  };
  return (
    <div
      onFocusCapture={() => handleShowDropdown()}
      onBlurCapture={() => handleShowDropdown()}
    >
      <TextFieldUI
        fieldState={selectItem}
        setFieldState={setSelectItem}
        placeholder="Select UI"
        fullWidth
        size="md"
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
