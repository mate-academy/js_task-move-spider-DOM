'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const posX = e.clientX;
  const posY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let x = posX - wallRect.left - spiderRect.width / 2 - 10;
  let y = posY - wallRect.top - spiderRect.height / 2 - 10;

  x = Math.max(0, Math.min(x, wallRect.width - spiderRect.width - 20));
  y = Math.max(0, Math.min(y, wallRect.height - spiderRect.height - 20));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
