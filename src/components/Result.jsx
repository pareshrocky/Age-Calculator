/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Result({ age }) {
  return (
    <div>
      {age === null ? (
        <>
          <p>--Years</p>
          <p>--Months</p>
          <p>--Days</p>
        </>
      ) : (
        <>
          <p>{`${age.years} Years`}</p>
          <p>{`${age.months} Months`}</p>
          <p>{`${age.days} Days`}</p>
        </>
      )}
    </div>
  );
}
