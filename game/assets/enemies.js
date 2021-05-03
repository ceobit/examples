import {isIntoView} from './aux';

const {randomValue} = require('./aux');

const enemies = document.querySelector('.enemies');

const enemiesArr = ['fireball', 'death-star'];

export const start = () => {
  const enemy = createEnemy();
  let currentEnemyPos = enemy.offsetTop;
  setInterval(moveEnemy.bind(this, enemy, currentEnemyPos), 100);
};

const createEnemy = () => {
  const enemy = document.createElement('img');
  const name = enemiesArr[randomValue(enemiesArr.length)];
  enemy.src = `/images/${name}.png`;
  enemy.classList.add('enemy', `enemy_${name}`);
  enemy.style.left = randomValue(window.innerWidth) + 'px';
  enemy.style.top = 0 + 'px';
  enemies.appendChild(enemy);

  return enemy;
};

const moveEnemy = (enemy, currentEnemyPos) => {
  currentEnemyPos += 30;
  enemy.style.marginTop = currentEnemyPos + 'px';

  if (!isIntoView(enemy)) {
    enemy.remove();
  }
};

const body = document.querySelector('body');

body.addEventListener('keypress', start);

// setInterval(start, 1000);


