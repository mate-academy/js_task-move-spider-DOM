'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const bordWidth = (wall.offsetWidth - wall.clientWidth) / 2;

wall.addEventListener('click', e => {
  const x = e.offsetX;
  const y = e.offsetY;

  function calculateCoords(coord, objLength) {
    if (coord < 0) {
      coord = 0;
    }

    if (coord - objLength / 2 - bordWidth < 0) {
      return 0;
    }

    if (coord > wall.clientHeight - objLength / 2) {
      return `${wall.clientHeight - objLength}px`;
    }

    return `${coord - (objLength / 2)}px`;
  }

  spider.style.left = calculateCoords(x, spiderWidth);
  spider.style.top = calculateCoords(y, spiderHeight);
});
