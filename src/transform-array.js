const CustomError = require("../extensions/custom-error");

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error('It is not array');
  }
  
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === DISCARD_NEXT) {
      if (arr[i + 2] === DOUBLE_PREV || arr[i + 2] === DISCARD_PREV) {
        i++;
      }
      i++;
    } else if (arr[i] === DISCARD_PREV) {
      if (i !== 0) {
        newArr.pop();
      }
    } else if (arr[i] === DOUBLE_NEXT) {
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === DOUBLE_PREV) {
      if (i !== 0) {
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(arr[i]);
    }
  };
  return newArr;
};
