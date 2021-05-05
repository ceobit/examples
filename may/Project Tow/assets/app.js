import './_scss/styles.scss';

const compare = document.querySelector('#compare');
const slider = document.querySelector('#slider');

function beforeAfter() {
  compare.style.width = slider.value + '%';
}

slider.addEventListener('input', beforeAfter);
slider.addEventListener('change', beforeAfter);

