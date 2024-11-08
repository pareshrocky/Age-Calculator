// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import InputField from "./InputField";
import { validateInput } from "../Utils/Validation";

// eslint-disable-next-line react/prop-types
export default function UserForm({onDateChange}) {
  const [userInputDate, setUserInputDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [invalidInputDate, setInvalidInputDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInputDate((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value }; // Validate all fields that have values
      const newErrors = {};
      for (const [key, val] of Object.entries(updatedValues)) {
        if (val) {
          newErrors[key] = validateInput(key, val, updatedValues);
        }
      }
      setInvalidInputDate((prevInvalidValues) => {
        return { ...prevInvalidValues, ...newErrors };
      });
      return updatedValues;
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { day, month, year } = userInputDate;

    // Validate all fields again before submission
    const newErrors = {
      day: validateInput("day", day, userInputDate),
      month: validateInput("month", month, userInputDate),
      year: validateInput("year", year, userInputDate),
    };
    setInvalidInputDate(newErrors);

    // Ensure the latest state of the errors is checked
    const currentErrors = {
      ...newErrors,
      ...invalidInputDate, // Ensure we have the latest errors from state
    };

    if (
      !currentErrors.day &&
      !currentErrors.month &&
      !currentErrors.year &&
      day &&
      month &&
      year
    ) {
      const inputDate = new Date(year, month - 1, day); // month is 0-indexed
      onDateChange(inputDate)
    } else {
      console.log("invalid date");
    }
  }

  return (
    <form className="formStyle" onSubmit={handleFormSubmit}>
      <InputField
        label="DAY"
        text="day"
        value={userInputDate.day}
        placeholder="DD"
        onChange={handleChange}
      />
      {invalidInputDate.day && (
        <p style={{ color: "red" }}>{invalidInputDate.day}</p>
      )}
      <InputField
        label="MONTH"
        text="month"
        value={userInputDate.month}
        placeholder="MM"
        onChange={handleChange}
      />
      {invalidInputDate.month && (
        <p style={{ color: "red" }}>{invalidInputDate.month}</p>
      )}
      <InputField
        label="YEAR"
        text="year"
        value={userInputDate.year}
        placeholder="YYYY"
        onChange={handleChange}
      />
      {invalidInputDate.year && (
        <p style={{ color: "red" }}>{invalidInputDate.year}</p>
      )}
      <button type="submit">done</button>
    </form>
  );
}
