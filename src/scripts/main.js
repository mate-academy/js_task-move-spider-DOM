'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const getCoord = (coord, direction) => {
  const wallMaxHeight = wall.clientHeight - spiderHeight;
  const wallNaxWidth = wall.clientWidth - spiderWidth;

  if (coord < 0) {
    return 0;
  }

  if (coord > wallMaxHeight && direction === 'y') {
    return wallMaxHeight;
  }

  if (coord > wallNaxWidth && direction === 'x') {
    return wallNaxWidth;
  }

  return coord;
};

document.addEventListener('click', e => {
  if (e.target.className === 'wall') {
    let y = e.offsetY - spiderHeight / 2;
    let x = e.offsetX - spiderWidth / 2;

    y = getCoord(y, 'y');
    x = getCoord(x, 'x');

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
