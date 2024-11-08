// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="container">
      <UserForm onDateChange={handleDateChange} />
      {selectedDate && <p>{selectedDate.toDateString()}</p>}
    </div>
  );
}
