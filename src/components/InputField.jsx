/* eslint-disable react/prop-types */
/* eslint-disable-next-line no-unused-vars*/
import React from "react";
import styles from "./InputField.module.css";
export default function InputField({ label, text, invalid, ...props }) {
  const showInvalid =
    invalid[text] || invalid["day"] === "Must be a valid date";
  return (
    <div className={styles.formGrpStyles}>
      <label
        style={{ color: showInvalid && "hsl(0, 100%, 67%)" }}
        className={styles.label}
        htmlFor={text}
      >
        {label}
      </label>
      <input
        style={{ borderColor: showInvalid && "hsl(0, 100%, 67%)" }}
        className={`${styles.input} ${styles.caret}`}
        type="number"
        id={text}
        name={text}
        {...props}
      />
      <span className={styles.errMsg}>
        {(showInvalid || invalid[text]) && invalid[text]}
      </span>
    </div>
  );
}
