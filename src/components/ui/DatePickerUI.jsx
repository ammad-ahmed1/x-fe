import React, { useEffect, useState } from "react";
import SelectUI from "./SelectUI";

const DatePickerUI = ({ dateState, setDateState, dateFormat }) => {
  const [yearsArr, setYearsArr] = useState([]);
  const [datesArr, setDatesArr] = useState([]);

  const [date, setDate] = useState({
    month: null,
    day: null,
    year: null,
  });

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
    if (!date?.month) return; // Prevents errors if no month is selected
    const dates = [];
    const month = date.month;
    if (month == 2) {
      for (let i = 1; i <= 29; i++) {
        dates.push({
          label: i.toString(),
          value: i,
        });
      }
    } else {
      const daysInMonth = [4, 6, 9, 11].includes(month) ? 30 : 31;
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push({
          label: i.toString(),
          value: i,
        });
      }
    }
    setDatesArr(dates);
  };

  const handleSelectChange = (type, selected) => {
    setDate((prev) => ({
      ...prev,
      [type]: selected,
    }));
  };

  const formatDate = () => {
    // Return empty string if any date part is missing
    if (!date?.day || !date?.month || !date?.year) return "";

    if (dateFormat === "dd/mm/yyyy") {
      setDateState(`${date?.day}/${date?.month}/${date?.year}`);
    } else if (dateFormat === "mm/dd/yyyy") {
      setDateState(`${date?.month}/${date?.day}/${date?.year}`);
    } else if (dateFormat === "yyyy/mm/dd") {
      setDateState(`${date?.year}/${date?.month}/${date?.day}`);
    }

    // Default fallback
    setDateState(`${date?.day}/${date?.month}/${date?.year}`);
  };

  useEffect(() => {
    groupYearsByDecade();
  }, []);
  useEffect(() => {
    if (date?.month) {
      generateDatesAccordingToMonth();
    }
    // if (selectedMonth) generateDatesAccordingToMonth();
  }, [date?.month]);

  useEffect(() => {
    if (date?.month && date?.day && date?.year) {
      console.log("run the formate date functions");
      formatDate();
    }
  }, [date]);
  return (
    <div className="flex gap-2">
      {/* month */}
      <SelectUI
        value={date.month}
        setValue={(selected) => handleSelectChange("month", selected?.value)}
        data={monthsArr}
        label="Month"
        size="xs"
      />
      {/* day */}
      <SelectUI
        value={date.day}
        setValue={(selected) => handleSelectChange("day", selected?.value)}
        data={datesArr}
        label="Day"
        size="xs"
        disabled={!date.month}
      />
      {/* year */}
      <SelectUI
        value={date.year}
        setValue={(selected) => handleSelectChange("year", selected?.value)}
        data={yearsArr}
        label="Year"
        size="xs"
      />
    </div>
  );
};

export default DatePickerUI;
