export const validateInput = (name, value, formValues) => {
  const currentYear = new Date().getFullYear();
  let errorMsg = "";

  switch (name) {
    case "day":
      if (!value) {
        errorMsg = "Day is required";
      } else if (value < 1 || value > 31) {
        errorMsg = "Day must be between 1 and 31";
      } else {
        const month = parseInt(formValues.month, 10);
        if (
          (month === 2 && value > 29) ||
          (month === 2 && !isLeapYear(formValues.year) && value > 28) ||
          ([4, 6, 9, 11].includes(month) && value > 30)
        ) {
          errorMsg = "Invalid day for the selected month";
        }
      }
      break;
    case "month":
      if (!value) {
        errorMsg = "Month is required";
      } else if (value < 1 || value > 12) {
        errorMsg = "Month must be between 1 and 12";
      }
      break;
    case "year":
      if (!value) {
        errorMsg = "Year is required";
      } else if (value > currentYear) {
        errorMsg = `Year must be less than or equal to ${currentYear}`;
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
