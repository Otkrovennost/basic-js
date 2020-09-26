const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        count = Math.max(count, 1 + this.calculateDepth(elem))
      }  
    });

    return count;
  }
};