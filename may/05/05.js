const title = document.querySelector('.title');
const item = document.querySelectorAll('.list_item');

const handler = (e) => {
  // console.log(e.target.textContent);

  if (e.target.textContent === '2') {
    window.alert('HEY');
  }

  // console.log(e);

};

const handlerTitle = (e) => {
  console.log(title);
  console.log(e.target);
};

item.forEach(el => el.addEventListener('click', handler));

title.addEventListener('click', handlerTitle);
