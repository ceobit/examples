import './_scss/styles.scss';

const btn = document.querySelector('.btn');
const select = document.querySelector('.custom-select');
const number = document.querySelector('.number');
const result = document.querySelector('.result');

const ConvertBase = function(num) {
  return {
    from: function(baseFrom) {
      return {
        to: function(baseTo) {
          return parseInt(num, baseFrom).toString(baseTo);
        },
      };
    },
  };
};

// binary to decimal
ConvertBase.bin2dec = function(num) {
  return ConvertBase(num).from(2).to(10);
};

// binary to hexadecimal
ConvertBase.bin2hex = function(num) {
  return ConvertBase(num).from(2).to(16);
};

// decimal to binary
ConvertBase.dec2bin = function(num) {
  return ConvertBase(num).from(10).to(2);
};

// decimal to hexadecimal
ConvertBase.dec2hex = function(num) {
  return ConvertBase(num).from(10).to(16);
};

// hexadecimal to binary
ConvertBase.hex2bin = function(num) {
  return ConvertBase(num).from(16).to(2);
};

// hexadecimal to decimal
ConvertBase.hex2dec = function(num) {
  return ConvertBase(num).from(16).to(10);
};

const convertNumber = e => {
  e.preventDefault();

  let value = 0;
  switch (+select.value) {
    case 1:
      value = ConvertBase.bin2dec(+number.value);
      break;
    case 2:
      value = ConvertBase.dec2bin(+number.value);
      break;
    case 3:
      value = ConvertBase.dec2hex(+number.value);
      break;
    case 4:
      value = ConvertBase.hex2dec(+number.value);
      break;
    default:
      value = 9;
  }
  result.value = value;

};

const resetAll = () => {
  result.value = '';
  number.value = '';
};

btn.addEventListener('click', convertNumber);
// select.addEventListener('click', resetAll);