// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Result from "./components/Result";

export default function App() {
  const [calculatedAge, setCalculatedAge] = useState(null);
  const handleDateChange = (date) => {
    setCalculatedAge(date);
  };
  return (
    <div className="container">
      <UserForm onDateChange={handleDateChange} />
      <Result age={calculatedAge}/>
    </div>
  );
}
