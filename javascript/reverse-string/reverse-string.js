export const reverseString = (str) => {
  if (str === '') {
    return str;
  }
  const splitStr = str.split('');
  const reverseArray = splitStr.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
};
