export const validateInput = (name, value, formValues) => {
  const currentYear = new Date().getFullYear();
  let errorMsg = "";

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
        }
      }
      break;
    case "month":
      if (!value) {
        errorMsg = "This field is required";
      } else if (value < 1 || value > 12) {
        errorMsg = "Must be a valid month";
      }
      break;
    case "year":
      if (!value) {
        errorMsg = "This field is required";
      } else if (value > currentYear) {
        errorMsg = "Must be in the past";
      }
      break;
    default:
      break;
  }

  return errorMsg;
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
