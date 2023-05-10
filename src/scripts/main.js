'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const newHeight = wall.clientHeight - spider.clientHeight;
const newWidth = wall.clientWidth - spider.clientWidth;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let spiderCoordY = e.offsetY - (spider.clientHeight / 2);
  let spiderCoordX = e.offsetX - (spider.clientWidth / 2);

  if (spiderCoordX > newWidth) {
    spiderCoordX = newWidth;
  }

  if (spiderCoordY > newHeight) {
    spiderCoordY = newHeight;
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
