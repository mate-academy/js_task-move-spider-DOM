'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (!e.target.closest('.wall')) {
    return;
  }

  const border = wall.clientTop;
  const halfSpiderW = spiderRect.width / 2;
  const halfSpiderH = spiderRect.height / 2;

  let posX = e.clientX - wallRect.left - halfSpiderW - border;
  let posY = e.clientY - wallRect.top - halfSpiderH - border;

  if (posX < 0) {
    posX = 0;
  }

  if (posY < 0) {
    posY = 0;
  }

  if (posX + spiderRect.width >= wallRect.width) {
    posX = wallRect.width - spiderRect.width - border * 2;
  }

  if (posY + spiderRect.height >= wallRect.height) {
    posY = wallRect.height - spiderRect.height - border * 2;
  }

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
