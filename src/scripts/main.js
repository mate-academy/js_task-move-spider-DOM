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

  spider.style.left = `${calculateCoords(cursorX, 'x')}px`;
  spider.style.top = `${calculateCoords(cursorY, 'y')}px`;
});

function calculateCoords(coords, dimension) {
  if (coords < 0) {
    return '0';
  }

  if (dimension === 'x' && coords > wallWidth - spiderWidth) {
    return String(wallWidth - spiderWidth);
  }

  if (dimension === 'y' && coords > wallHeight - spiderHeight) {
    return String(wallHeight - spiderHeight);
  }

  return coords;
}
