'use strict';

const wall = document.querySelector('.wall');
const wallClW = wall.clientWidth;
const wallClL = wall.clientLeft;

const wallClH = wall.clientHeight;
const wallClT = wall.clientTop;

const spider = document.querySelector('.spider');
const spiderOfW = spider.offsetWidth;
const spiderOfH = spider.offsetHeight;

const minCoordX = wall.getBoundingClientRect().x + wallClL;
const maxCoordX = minCoordX + wallClW - wallClL - spiderOfW;

const minCoordY = wall.getBoundingClientRect().y + wallClT;
const maxCoordY = minCoordY + wallClH - wallClT - spiderOfH;

document.addEventListener('click', e => {
  const wind = e.target.closest('.wall');

  if (!wind) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  switch (true) {
    case x < minCoordX:
      spider.style.left = 0 + 'px';
      break;
    case x > maxCoordX:
      spider.style.left = (wallClW - spiderOfW) + 'px';
      break;
    default:
      spider.style.left = (x - minCoordX) + 'px';
      break;
  }

  switch (true) {
    case y < minCoordY:
      spider.style.top = 0 + 'px';
      break;
    case y > maxCoordY:
      spider.style.top = (wallClH - spiderOfW) + 'px';
      break;
    default:
      spider.style.top = (y - minCoordY) + 'px';
      break;
  }
});
