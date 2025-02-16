import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        placeholderText="Select Date Range"
        className="border !py-4 !px-3 w-45 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
      />
    </div>
  );
}

export default DateRangePicker;
