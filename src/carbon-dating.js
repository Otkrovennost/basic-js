const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const ln2 = 0.693;
const k = ln2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  let result = false;
  if (typeof(sampleActivity) === 'string') {
    let numberSampleActivity = parseFloat(sampleActivity);

    if (numberSampleActivity < MODERN_ACTIVITY && numberSampleActivity > 0) {
      const t = Math.log(MODERN_ACTIVITY / numberSampleActivity) / k;
      result = Math.ceil(t);
    }
  }

  return result;

};