export const calculateAge = (userInputDate) => {
  const { day, month, year } = userInputDate;
  const inputDate = new Date(year, month - 1, day); // month is 0-indexed
  const currentDate = new Date();
  let years;
  if(year < 100 && year >= 0){
    years = currentDate.getFullYear()-year;
  }else{
    years = currentDate.getFullYear() - inputDate.getFullYear();
  }
  let months = currentDate.getMonth() - inputDate.getMonth();
  let days = currentDate.getDate() - inputDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (!isNaN(years) && years >= 0) {
    return {days,months,years}
  } 
  
  return null;
};
