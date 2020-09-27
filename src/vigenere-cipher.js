const CustomError = require("../extensions/custom-error");

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(data = true) {
    this.data = data;
    this.alphabet = ALPHABET;
  }

  encrypt(mess, key) {
    if(!mess || !key) throw new Error();

    let newArr = [];
    let step = -1;
    for (let i = 0; i < mess.length; i++) {
      if (this.alphabet.indexOf(mess[i].toUpperCase()) > -1) {
        step++;
        let number = (this.alphabet.indexOf(mess[i].toUpperCase()) + this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        newArr = [...newArr, ...this.alphabet[number]];
      } else {
        newArr = [...newArr, ...mess[i]];
      }
    }
    return this.data ? newArr.join('') : newArr.reverse().join('');
  }   

  decrypt(mess, key) {
    if(!mess || !key) throw new Error();

    let newArr = [];
    let step = -1;
    for (let i = 0; i < mess.length; i++) {
      if (this.alphabet.indexOf(mess[i].toUpperCase()) > -1) {
        step++;
        let number = (this.alphabet.indexOf(mess[i].toUpperCase()) + this.alphabet.length - this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        newArr = [...newArr, ...this.alphabet[number]];
      } else {
        newArr = [...newArr, ...mess[i]];
      }
    }
    return this.data ? newArr.join('') : newArr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
