const CustomError = require("../extensions/custom-error");

// const DISCARD_NEXT = '--discard-next';
// const DISCARD_PREV = '--discard-prev';
// const DOUBLE_NEXT = '--double-next';
// const DOUBLE_PREV = '--double-prev';

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here

  // if(!Array.isArray(arr)) {
  //   throw Error('It is not array');
  // }

  // let newArr = arr.slice();
  
  // newArr.forEach((elem) => {
  //   if((elem === DISCARD_NEXT || elem === DISCARD_PREV || elem === DOUBLE_NEXT || elem === DOUBLE_PREV) && (newArr.indexOf(elem) === 0 || newArr.indexOf(elem) === newArr.length - 1)) {
  //     newArr.splice(newArr.indexOf(elem), 1);
  //   } else if (elem === DOUBLE_NEXT) {
  //     newArr.splice(newArr.indexOf(elem), 1, newArr[newArr.indexOf(elem) + 1]);
  //   } else if (elem === DOUBLE_PREV) {
  //     newArr.splice(newArr.indexOf(elem), 1, newArr[newArr.indexOf(elem) - 1]);
  //   } else if(elem === DISCARD_NEXT) {
  //     newArr.splice(newArr.indexOf(elem), 2);
  //   } else if (elem === DISCARD_PREV) {
  //     newArr.splice(newArr.indexOf(elem) - 1, 2);
  //   }
  // });

  // return newArr;
};
