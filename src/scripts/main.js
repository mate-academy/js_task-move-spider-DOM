'use strict';

// Находим элементы: стена и паук
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (!e.target.closest('.wall')) {
    return;
  }

  const halfSpiderW = spiderRect.width / 2;
  const halfSpiderH = spiderRect.height / 2;

  let posX = e.clientX - wallRect.left - halfSpiderW;
  let posY = e.clientY - wallRect.top - halfSpiderH;

  posX = Math.max(0, Math.min(posX, wallRect.width - spiderRect.width));
  posY = Math.max(0, Math.min(posY, wallRect.height - spiderRect.height));

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
