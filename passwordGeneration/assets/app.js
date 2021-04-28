import './_scss/styles.scss';


const range = document.querySelector('.form-range');
const rangeValue = document.querySelector('.range-value');
const btn = document.querySelector('.btn');
const password = document.querySelector('.password');
const complexity = document.querySelector('.form-check-input');
const note = document.querySelector('.note');

const passGenerator = (e, length) => {
  let pass = '';
  const def = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,@#!?$';
  let charSet = def;


  if (complexity.checked) {
    charSet += 'АБВГДЕЖЗИКЛМНОПРСТУЫЙЪЬФЭЮЯ';
    note.textContent = 'Yes now you have Russian letters here!!!';
  } else {
    charSet = def;
    note.textContent = '';
  }

  for (let i = 0; i < length; i++) {
    pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  password.textContent = pass;

};

const changeLength = e => {
  rangeValue.textContent = e.target.value;
}


range.addEventListener('mousemove', changeLength);
btn.addEventListener('click', e => passGenerator(e,rangeValue.textContent));