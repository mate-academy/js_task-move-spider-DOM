'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  spider.style.left = positionCalc(e.offsetX, wall.clientWidth, spider.width);
  spider.style.top = positionCalc(e.offsetY, wall.clientHeight, spider.height);
});

function positionCalc(coordinate, wallSize, spiderSize) {
  let position = coordinate - spiderSize / 2;

  if (coordinate < spiderSize / 2) {
    position = 0;
  }

  if (coordinate > wallSize - spiderSize / 2) {
    position = wallSize - spiderSize;
  }

  return `${position}px`;
};
