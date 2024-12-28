export const validateInput = (name, value, formValues) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let errorMsg = "";

  //returns true if given date is in future
  const isFutureDate = (day, month, year) => {
    const inputDate = new Date(year, month - 1, day);
    return inputDate > currentDate;
  };

  // check which fileld is causing the given date to be treated as future date
  // and wil output futureDateErrorMsg in below that particular respective field.
  const checkFutureDateError = (day, month, year) => {
    const futureDateErrorMsg = "Must be in the past";
    if (year && year > currentYear) {
      return { field: "year", errorMsg: futureDateErrorMsg };
    }
    if (month && day && isFutureDate(day, month, year)) {
      if (year && !isFutureDate(day, month, currentYear)) {
        return { field: "year", errorMsg: futureDateErrorMsg };
      } else if (month && !isFutureDate(day, month, currentYear)) {
        return { field: "month", errorMsg: futureDateErrorMsg };
      } else if (
        day &&
        !isFutureDate(
          currentDate.getDate(),
          currentDate.getMonth() + 1,
          currentYear
        )
      ) {
        return { field: "day", errorMsg: futureDateErrorMsg };
      }
    }
    return null;
  };
  // below switch is validating user date field inputs
  //switch is used as it will validate for only one input field at a given point of time.
  switch (name) {
    case "day":
      if (!value) {
        errorMsg = "This field is required";
      } else if (value < 1 || value > 31) {
        errorMsg = "Must be a valid day";
      } else {
        const month = parseInt(formValues.month, 10);
        if (
          (month === 2 && value > 29) ||
          (month === 2 && !isLeapYear(formValues.year) && value > 28) ||
          ([4, 6, 9, 11].includes(month) && value > 30)
        ) {
          errorMsg = "Must be a valid date";
        } else if (
          formValues.year &&
          isFutureDate(value, month, formValues.year)
        ) {
          const futureDateError = checkFutureDateError(
            value,
            month,
            formValues.year
          );
          if (futureDateError && futureDateError.field === "day") {
            errorMsg = futureDateError.errorMsg;
          }
        }
      }
      break;
    case "month":
      if (!value) {
        errorMsg = "This field is required";
      } else if (value < 1 || value > 12) {
        errorMsg = "Must be a valid month";
      } else if (
        formValues.day &&
        formValues.year &&
        isFutureDate(formValues.day, value, formValues.year)
      ) {
        const futureDateError = checkFutureDateError(
          formValues.day,
          value,
          formValues.year
        );
        if (futureDateError && futureDateError.field === "month") {
          errorMsg = futureDateError.errorMsg;
        }
      }
      break;
    case "year":
      if (!value) {
        errorMsg = "This field is required";
      } else if (
        formValues.day &&
        formValues.month &&
        isFutureDate(formValues.day, formValues.month, value)
      ) {
        const futureDateError = checkFutureDateError(
          formValues.day,
          formValues.month,
          value
        );
        if (futureDateError && futureDateError.field === "year") {
          errorMsg = futureDateError.errorMsg;
        }
      }
      break;
    default:
      break;
  }

  return errorMsg;
};
//function to check whether a year is leap or not.
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
