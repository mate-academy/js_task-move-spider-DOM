'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxCoordY = wall.clientHeight - spider.clientHeight;
const maxCoordX = wall.clientWidth - spider.clientWidth;

document.addEventListener('click', e => {
  const wallPerimeter = e.target.closest('.wall');

  if (!wallPerimeter) {
    return;
  }

  let spiderCoordY = e.offsetY - (spider.clientHeight / 2);
  let spiderCoordX = e.offsetX - (spider.clientWidth / 2);

  if (spiderCoordX > maxCoordX) {
    spiderCoordX = maxCoordX;
  }

  if (spiderCoordY > maxCoordY) {
    spiderCoordY = maxCoordY;
  }

  if (spiderCoordX < 0) {
    spiderCoordX = 0;
  }

  if (spiderCoordY < 0) {
    spiderCoordY = 0;
  }
  spider.style.top = `${spiderCoordY}px`;
  spider.style.left = `${spiderCoordX}px`;
  spider.style.boxSizing = 'border-box';
});
