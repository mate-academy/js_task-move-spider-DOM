'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetHeight;
const spiderHeight = spider.offsetWidth;

const heightDifference = wall.offsetTop + wall.clientTop;
const widthDifference = wall.offsetLeft + wall.clientLeft;

document.addEventListener('click', event => {
  const spiderLeft = event.clientX - widthDifference - spiderWidth / 2;
  const spiderTop = event.clientY - heightDifference - spiderHeight / 2;

  spider.style.left = `${validateCoords(spiderLeft, 'left')}px`;
  spider.style.top = `${validateCoords(spiderTop, 'top')}px`;
});

function validateCoords(position, direction) {
  let coord = position;
  let spiderSize;
  let sizeProperty;

  if (position < 0) {
    coord = 0;
  }

  if (direction === 'left') {
    spiderSize = spiderWidth;
    sizeProperty = 'clientWidth';
  } else {
    spiderSize = spiderHeight;
    sizeProperty = 'clientHeight';
  }

  const gap = coord + spiderSize;

  if (gap > wall[sizeProperty]) {
    coord -= gap - wall[sizeProperty];
  }

  return coord;
}
