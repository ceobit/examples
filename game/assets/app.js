import './_scss/styles.scss';

const spaceShip = document.querySelector('.space-ship');
const body = document.querySelector("body");
let currentPos = spaceShip.offsetLeft;


// move the ship TODO: limit the borders
const spaceShipActions = e => {

  moveSpaceShip(e);
  shoot(e);

};


//ACTIONS
const moveSpaceShip = e => {
  switch (e.code) {
    case 'KeyA': //left
      currentPos -=30;
      spaceShip.style.marginLeft = currentPos + 'px';
      break;
    case 'KeyD': //right
      currentPos += 30;
      spaceShip.style.marginLeft = currentPos + 'px';
      break;
    default:
      console.log('press other key');
  }
};

const shoot = e => {
  if (e.code === 'Space') {
    
  }
};

body.addEventListener('keypress', spaceShipActions);


