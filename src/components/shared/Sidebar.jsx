import React from "react";
import { sidebarMenu } from "../../data/ui-data";

const Sidebar = () => {
  console.log(sidebarMenu, "....................sI");
  return (
    <div>
      {sidebarMenu?.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item?.name}</p>
          {item?.icon}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
