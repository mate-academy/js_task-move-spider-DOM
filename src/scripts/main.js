'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Cypress не чекає анімацію
spider.style.transition = 'none';

wall.addEventListener('click', (e) => {
  // Клік поза стіною — нічого не робимо
  if (e.target !== wall && e.target !== spider) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Координати кліку ВСЕРЕДИНІ стіни (без border)
  let x = e.offsetX - spiderWidth / 2;
  let y = e.offsetY - spiderHeight / 2;

  // Максимальні координати (без border)
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  // Обмеження
  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
