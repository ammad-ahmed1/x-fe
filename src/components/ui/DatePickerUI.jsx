import React, { useEffect, useState } from "react";
import SelectUI from "./SelectUI";

const DatePickerUI = () => {
  const [yearsArr, setYearsArr] = useState([]);
  const monthsArr = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ];

  const groupYearsByDecade = () => {
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    const years = [];
    for (let i = startYear; i <= endYear; i++) {
      years.push({
        label: i.toString(),
        value: i,
      });
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
      <SelectUI data={monthsArr} placeholder="Month" size="sm" />

      {/* date */}
      {/* year */}
      <SelectUI data={yearsArr} placeholder="Year" size="sm" />
    </div>
  );
};

export default DatePickerUI;
