import './_scss/styles.scss';
import {isIntoView} from './aux';

const spaceShip = document.querySelector('.space-ship_container');
const ship = document.querySelector('.space-ship');
const body = document.querySelector('body');

let currentSpaceShipPos = spaceShip.offsetLeft;

// move the ship TODO: limit the borders
const spaceShipActions = e => {

  moveSpaceShip(e);
  shoot(e);

};

//ACTIONS
const moveSpaceShip = e => {
  switch (e.code) {
    case 'KeyA': //left
      currentSpaceShipPos -= 30;
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

  if (e.code === 'Space') {
    const rocket = createRocket();
    rocket.classList.add('rocket_show');
    let currentRocketPos = rocket.offsetTop;
    setInterval(moveRocket.bind(this, rocket, currentRocketPos), 50);
  }

};

const createRocket = () => {
  const rocket = document.createElement('img');
  rocket.src = '/images/rocket.png';
  rocket.classList.add('rocket');
  spaceShip.insertBefore(rocket, ship);

  return rocket;
};

const moveRocket = (rocket, currentRocketPos) => {
  currentRocketPos += 30;
  rocket.style.marginBottom = currentRocketPos + 'px';

  if (!isIntoView(rocket)) {
    rocket.remove();
  }
};

body.addEventListener('keypress', spaceShipActions);


