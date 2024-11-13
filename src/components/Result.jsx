/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./Result.module.css";

export default function Result({ age }) {
  // const [shouldAnimate, setShouldAnimate] = useState(false);

  // useEffect(() => {
  //   if (age !== null) {
  //     // Reset animation by setting `shouldAnimate` to false temporarily
  //     setShouldAnimate(false);
  //     const timer = setTimeout(() => setShouldAnimate(true), 50); // Small delay to reset animation

  //     // Cleanup timer on component unmount
  //     return () => clearTimeout(timer);
  //   }
  // }, [age]);

  return (
    <div>
      {age === null ? (
        <div className={styles.ageContainer}>
          <p><span className={styles.colored}>--</span>Years</p>
          <p><span className={styles.colored}>--</span>Months</p>
          <p><span className={styles.colored}>--</span>Days</p>
        </div>
      ) : (
        <div
          className={`${styles.ageContainer}`}
          key={JSON.stringify(age)} // Forces re-render on age change
          // onAnimationEnd={() => setShouldAnimate(false)} // Reset animation state after it ends
        >
          <p><span className={styles.colored}>{age.years}</span>Years</p>
          <p><span className={styles.colored}>{age.months}</span>Months</p>
          <p><span className={styles.colored}>{age.days}</span>Days</p>
        </div>
      )}
    </div>
  );
}

