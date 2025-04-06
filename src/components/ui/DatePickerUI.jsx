import React, { useEffect, useState } from "react";
import SelectUI from "./SelectUI";

const DatePickerUI = () => {
  const [yearsArr, setYearsArr] = useState([]);
  const [datesArr, setDatesArr] = useState([]);
  const [selectedYear, setSelectedYear] = useState({});
  const [selectedMonth, setSelectedMonth] = useState({});
  const [selectedDate, setSelectedDate] = useState({});

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
  const generateDatesAccordingToMonth = () => {
    console.log("called the dates function");
    if (!selectedMonth) return; // Prevents errors if no month is selected
    console.log("month selected proceeding the dates function");
    const dates = [];
    const month = selectedMonth.value;
    if (month == 2) {
      for (let i = 1; i <= 29; i++) {
        dates.push({
          label: i.toString(),
          value: i,
        });
      }
      console.log(dates, "....Dates");
    } else {
      const daysInMonth = [4, 6, 9, 11].includes(month) ? 30 : 31;
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push({
          label: i.toString(),
          value: i,
        });
      }
      console.log(dates, "....Dates");
    }
    setDatesArr(dates);
  };

  useEffect(() => {
    groupYearsByDecade();
  }, []);
  useEffect(() => {
    if (Object.keys(selectedMonth).length != 0) {
      console.log(selectedMonth, "select month in date picker");
      console.log("use effect is running");
      generateDatesAccordingToMonth();
    }
    // if (selectedMonth) generateDatesAccordingToMonth();
  }, [selectedMonth]);

  return (
    <div className="flex gap-2">
      {/* month */}
      <SelectUI
        value={selectedMonth}
        setValue={setSelectedMonth}
        data={monthsArr}
        placeholder="Month"
        size="sm"
      />
      {/* date */}
      <SelectUI
        value={selectedDate}
        setValue={setSelectedDate}
        data={datesArr}
        placeholder="Date"
        size="sm"
      />
      {/* year */}
      <SelectUI
        value={selectedYear}
        setValue={setSelectedYear}
        data={yearsArr}
        placeholder="Year"
        size="sm"
      />
    </div>
  );
};

export default DatePickerUI;
