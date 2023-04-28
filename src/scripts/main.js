'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const maxY = wall.clientHeight - spider.clientHeight;
const maxX = wall.clientWidth - spider.clientWidth;

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  let spiderCoordY = e.offsetY - (spider.clientHeight / 2);
  let spiderCoordX = e.offsetX - (spider.clientWidth / 2);

  if (spiderCoordX > maxX) {
    spiderCoordX = maxX;
  }

  if (spiderCoordY > maxY) {
    spiderCoordY = maxY;
  }

  if (spiderCoordX < 0) {
    spiderCoordX = 0;
  }

  if (spiderCoordY < 0) {
    spiderCoordY = 0;
  }
  spider.style.top = `${spiderCoordY}px`;
  spider.style.left = `${spiderCoordX}px`;
});
