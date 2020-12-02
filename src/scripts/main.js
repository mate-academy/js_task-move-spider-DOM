'use strict';

const spider = document.querySelector('.spider');
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;
const wall = document.querySelector('.wall');
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

document.addEventListener('click', e => {
  if (e.target === spider) {
    spider.style.left
      = `${Math.random() * (wallWidth - spider.offsetWidth)}px`;

    spider.style.top
      = `${Math.random() * (wallHeight - spider.offsetHeight)}px`;

    return;
  }

  if (e.target !== wall) {
    return;
  }

  const cursorX = e.offsetX - spiderWidth / 2;
  const cursorY = e.offsetY - spiderHeight / 2;

  spider.style.left = calculateCoords(cursorX, wallWidth, spiderWidth) + 'px';
  spider.style.top = calculateCoords(cursorY, wallHeight, spiderHeight) + 'px';
});

function calculateCoords(coords, wallSize, spiderSize) {
  if (coords < 0) {
    return 0;
  }

  if (coords > wallSize - spiderSize) {
    return wallSize - spiderSize;
  }

  return coords;
}
