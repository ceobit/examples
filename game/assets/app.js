import './_scss/styles.scss';

const spaceShip = document.querySelector('.space-ship_container');
const rocket = document.querySelector('.rocket');
const body = document.querySelector("body");

let currentSpaceShipPos = spaceShip.offsetLeft;
let currentRocketPos = rocket.offsetTop;


// move the ship TODO: limit the borders
const spaceShipActions = e => {

  moveSpaceShip(e);
  shoot(e);

};


//ACTIONS
const moveSpaceShip = e => {
  switch (e.code) {
    case 'KeyA': //left
      currentSpaceShipPos -=30;
      spaceShip.style.marginLeft = currentSpaceShipPos + 'px';
      break;
    case 'KeyD': //right
      currentSpaceShipPos += 30;
      spaceShip.style.marginLeft = currentSpaceShipPos + 'px';
      break;
    default:
      console.log('press other key');
  }
};

const shoot = e => {
  let movement;
  if (e.code === 'Space') {
    rocket.classList.add('rocket_show');
    movement = setInterval(moveRocket, 50);
  }

  if (e.code === 'KeyQ') {
    console.log('clear');
    clearInterval(movement);
  }
};

const moveRocket = () => {
  currentRocketPos +=30;
  rocket.style.marginBottom = currentRocketPos + 'px';
};

body.addEventListener('keypress', spaceShipActions);


