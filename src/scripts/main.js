'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  // write code here
  let spiderCoordX = e.clientX - wall.getBoundingClientRect().x
    - wall.clientLeft - spider.clientWidth / 2;

  let spiderCoordY = e.clientY - wall.getBoundingClientRect().y
    - wall.clientTop - spider.clientHeight / 2;

  if (spiderCoordX < 0) {
    spiderCoordX = 0;
  }

  if (spiderCoordX + spider.clientWidth > wall.clientWidth) {
    spiderCoordX = wall.clientWidth - spider.clientWidth;
  }

  if (spiderCoordY < 0) {
    spiderCoordY = 0;
  }

  if (spiderCoordY + spider.clientHeight > wall.clientHeight) {
    spiderCoordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${spiderCoordX}px`;
  spider.style.top = `${spiderCoordY}px`;
});
