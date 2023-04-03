'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = wall.clientWidth - spider.clientWidth;
const height = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  const target = e.target;

  if (!target.classList.contains('wall')) {
    return;
  }

  let spiderCoordX = e.offsetX - spider.clientWidth / 2;
  let spiderCoordY = e.offsetY - spider.clientHeight / 2;

  if (spiderCoordX > width) {
    spiderCoordX = width;
  }

  if (spiderCoordX < 0) {
    spiderCoordX = 0;
  }

  if (spiderCoordY > height) {
    spiderCoordY = height;
  }

  if (spiderCoordY < 0) {
    spiderCoordY = 0;
  }

  spider.style.left = `${spiderCoordX}px`;
  spider.style.top = `${spiderCoordY}px`;
});
