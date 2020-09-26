const { FakeXMLHttpRequest } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members instanceof Array) {
    let newArr = [];
    members.forEach(elem => {
      if(typeof(elem) === 'string') {
        newArr.push(elem.trim()[0].toUpperCase());
      } 
    });
    return newArr.sort().join('');
  } else {
    return false;
  }
};
