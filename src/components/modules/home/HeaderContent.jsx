import React, { useState } from "react";
import TabsUI from "../../ui/TabsUI";
import { headerTabs } from "../../../data/ui-data";

const HeaderContent = () => {
  const [dummyParam, setDummyParam] = useState("for-you");
  const handleTabClick = (tab) => {
    setDummyParam(tab.value);
  };
  return (
    <div className="w-full flex">
      {headerTabs.map((item) => (
        <TabsUI
          tab={item}
          onClick={handleTabClick}
          isActive={dummyParam == item?.value ? true : false}
        />
      ))}
    </div>
  );
};

export default HeaderContent;
