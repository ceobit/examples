import './_scss/styles.scss';

const btn = document.querySelector('.btn');
const select = document.querySelector('.custom-select');
const number = document.querySelector('.number');

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
  
  let result = 0;
  switch (select.value) {
    case 1:
      result = ConvertBase.bin2dec(number);
      break;
    case 2:
      result = ConvertBase.dec2bin(number);
      break;
    case 3:
      result = ConvertBase.dec2hex(number);
      break;
    case 4:
      result = ConvertBase.hex2dec(number);
      break;
    default:
      result = 0;
  }


};

btn.addEventListener('submit', convertNumber);