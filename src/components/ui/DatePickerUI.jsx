import React, { useEffect, useState } from "react";
import SelectUI from "./SelectUI";

const DatePickerUI = () => {
  const [yearsArr, setYearsArr] = useState([]);
  const groupYearsByDecade = () => {
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    const years = [];
    for (let i = startYear; i <= endYear; i++) {
      years.push(i);
    }
    setYearsArr(years);
    // return years.reverse();
  };
  useEffect(() => {
    groupYearsByDecade();
  }, []);
  console.log(yearsArr);
  return (
    <div>
      {/* month */}
      {/* date */}
      {/* year */}
      <SelectUI data={yearsArr} placeholder="Year" />
    </div>
  );
};

export default DatePickerUI;
