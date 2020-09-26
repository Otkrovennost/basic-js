const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);

  let commingOptions = {
    repeatTimes: ('repeatTimes' in options && typeof(options.repeatTimes) === 'number') ? options.repeatTimes : 1, 
    separator: 'separator' in options ? options.separator : '+', 
    addition: 'addition' in options ? String(options.addition) : '', 
    additionRepeatTimes: ('additionRepeatTimes' in options && typeof(options.additionRepeatTimes) === 'number') ? options.additionRepeatTimes : 1, 
    additionSeparator: 'additionSeparator' in options ? options.additionSeparator : '|'
  };

  let repeat = '';
  if (commingOptions.additionRepeatTimes > 0) {
    repeat = commingOptions.addition;
    for (let i = 1; i < commingOptions.additionRepeatTimes; i++) {
      repeat += commingOptions.additionSeparator + commingOptions.addition
    }
  }

  let result = str + repeat;
  for (let i = 1; i < commingOptions.repeatTimes; i++) {
      result += commingOptions.separator + str + repeat;
  }
  
  return result;
};
  