export const isLeap = (year) => {
  let leapYear;
  leapYear = year % 4;
  if (leapYear !== 0) {
    return false;
  }
  leapYear = year % 100;
  if (leapYear !== 0) {
    return true;
  }
  leapYear = year % 400;
  if (leapYear !== 0) {
    return false;
  }
  return true;
};
