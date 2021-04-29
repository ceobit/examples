import './_scss/styles.scss';

const spaceShip = document.querySelector('.space-ship');
const body = document.querySelector("body");


const moveSpaceShip = e => {
  const currentPos = spaceShip.offsetLeft;

  console.log('11111');

  switch (e.code) {
    case 'KeyA': //left
      spaceShip.style.marginLeft = (currentPos - 5) + 'px';
      break;
    case 'KeyD': //right
      spaceShip.style.marginLef = (currentPos + 5) + 'px';
      break;
    default:
      console.log('press other key');
  }

};

body.addEventListener('keypress', moveSpaceShip);
