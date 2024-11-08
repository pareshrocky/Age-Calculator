/* eslint-disable react/prop-types */
/* eslint-disable-next-line no-unused-vars*/
import React from "react";
export default function InputField({ label, text, ...props }) {
  return (
    <div className="form-group-style">
      <label htmlFor={text}>{label}</label>
      <input type="text" id={text} name={text} {...props} />
    </div>
  );
}
